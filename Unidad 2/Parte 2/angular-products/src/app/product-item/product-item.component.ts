import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-item',
  imports: [DatePipe, UpperCasePipe, IntlCurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product: Product = {
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: '/ssd.jpg',
    rating: 5,
  };
  showImage = signal(true);

  deleteProduct() {}
}
