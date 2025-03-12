import {
  Component,
  effect,
  inject,
  signal
} from '@angular/core';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'products-page',
  imports: [FormsModule, ProductItemComponent, FaIconComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  animations: [
    trigger('animateProduct', [
      state('true', style({ backgroundColor: 'lightgreen' })),
      transition('false => true', animate('300ms ease-in')),
      transition('true => false', animate('300ms ease-out')),
    ]),
    trigger('animateList', [
      transition(':increment', [
        query('product-item:enter', [ // Cuidado con el import de query (debe ser @angular/animations)
          style({ opacity: 0, transform: 'translateX(-100px)' }),
          stagger(
            100,
            animate('500ms ease-out', style({ opacity: 1, transform: 'none' }))
          ),
        ], {optional: true}),
      ]),
    ]),
  ],
})
export class ProductsPageComponent {
  #productsService = inject(ProductsService);

  showImage = signal(true);

  icons = { eye: faEye, eyeSlash: faEyeSlash }

  search = signal('');
  searchDebounced = toSignal(
    toObservable(this.search).pipe(debounceTime(600), distinctUntilChanged())
  );

  productsResource = rxResource({
    request: () => this.searchDebounced(),
    loader: ({ request: search }) => this.#productsService.getProducts(search!),
  });

  constructor() {
    effect(() =>
      console.log('Imágenes visibles: ' + (this.showImage() ? 'sí' : 'no'))
    );
  }

  toggleImage() {
    this.showImage.update((show) => !show);
  }

  deleteProduct(product: Product) {
    this.productsResource.update((products) =>
      products?.filter((p) => p !== product)
    );
  }
}
