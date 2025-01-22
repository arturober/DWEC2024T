import {
  Component,
  computed,
  effect,
  inject,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'products-page',
  imports: [FormsModule, ProductItemComponent, ProductFormComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  #productsService = inject(ProductsService);

  products = signal<Product[]>([]);

  showImage = signal(true);
  search = signal('');

  productsFiltered = computed(() => this.products().filter((p) =>
    p.description.toLowerCase().includes(this.search().toLowerCase())
  ));

  constructor() {
    this.#productsService.getProducts().subscribe(products => this.products.set(products));
    effect(() =>
      console.log('Imágenes visibles: ' + (this.showImage() ? 'sí' : 'no'))
    );
  }

  toggleImage() {
    this.showImage.update((show) => !show);
  }

  addProduct(product: Product) {
    this.products.update(products => products.concat(product));
  }

  deleteProduct(product: Product) {
    this.products.update(products => products.filter(p => p !== product));
  }
}
