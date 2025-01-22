import {
  Component,
  computed,
  effect,
  signal
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../interfaces/product';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductFormComponent } from '../product-form/product-form.component';

@Component({
  selector: 'products-page',
  imports: [FormsModule, ProductItemComponent, ProductFormComponent],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
})
export class ProductsPageComponent {
  products = signal<Product[]>([
    {
      id: 1,
      description: 'SSD hard drive',
      available: '2016-10-03',
      price: 75,
      imageUrl: '/ssd.jpg',
      rating: 5,
    },
    {
      id: 2,
      description: 'LGA1151 Motherboard',
      available: '2016-09-15',
      price: 96.95,
      imageUrl: '/motherboard.jpg',
      rating: 4,
    },
    {
      id: 3,
      description: '16GB RAM',
      available: '2024-12-15',
      price: 56.5,
      imageUrl: '/ram.jpg',
      rating: 3,
    },
  ]);

  showImage = signal(true);
  search = signal('');

  productsFiltered = computed(() => this.products().filter((p) =>
    p.description.toLowerCase().includes(this.search().toLowerCase())
  ));

  constructor() {
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
