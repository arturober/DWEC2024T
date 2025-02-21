import { Component, effect, inject, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'products-page',
  imports: [ReactiveFormsModule, ProductItemComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  #productsService = inject(ProductsService);

  searchControl = new FormControl('', {nonNullable: true});
  search = toSignal(
    this.searchControl.valueChanges.pipe(
        debounceTime(600), // 600 milisegundos hasta que deja de escribir
        distinctUntilChanged(), // Solo si el valor cambia
    ),
    { initialValue: '' }
  )

  productsResource = rxResource({
    request: () => this.search(),
    loader: ({request: search}) => this.#productsService.getProducts(search)
  });

  showImage = signal(true);

  constructor() {
    effect(() =>
      console.log('Imágenes visibles: ' + (this.showImage() ? 'sí' : 'no'))
    );
  }

  toggleImage() {
    this.showImage.update((show) => !show);
  }

  deleteProduct(product: Product) {
    this.productsResource.update((products) => products?.filter((p) => p !== product));
  }
}
