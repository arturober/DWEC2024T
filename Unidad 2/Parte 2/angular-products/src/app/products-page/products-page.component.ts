import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  UpperCasePipe,
} from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../interfaces/product';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'products-page',
  imports: [FormsModule, JsonPipe, ProductItemComponent],
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

  newProduct = {
    id: 4,
    description: '',
    price: 0,
    available: '',
    imageUrl: '',
    rating: 1,
  };

  #changeDetector = inject(ChangeDetectorRef);

  constructor() {
    effect(() =>
      console.log('Imágenes visibles: ' + (this.showImage() ? 'sí' : 'no'))
    );
  }

  toggleImage() {
    this.showImage.update((show) => !show);
  }

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files?.length) return;
    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('load', () => {
      this.newProduct.imageUrl = reader.result as string;
      this.#changeDetector.markForCheck();
    });
  }

  addProduct(form: NgForm) {
    this.products.update(products => products.concat({...this.newProduct}));
    form.resetForm();
    this.newProduct.imageUrl = '';
    this.newProduct.id++;
  }

  deleteProduct(product: Product) {
    this.products.update(products => products.filter(p => p !== product));
  }
}
