import {
  afterNextRender,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'products-page',
  imports: [FormsModule, ProductItemComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  #productsService = inject(ProductsService);

  showImage = signal(true);

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
