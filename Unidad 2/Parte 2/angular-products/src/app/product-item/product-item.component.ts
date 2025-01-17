import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from '../interfaces/product';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'product-item',
  imports: [DatePipe, UpperCasePipe, IntlCurrencyPipe, StarRatingComponent],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  product = input.required<Product>();
  showImage = input(true);
  deleted = output<void>();

  deleteProduct() {
    this.deleted.emit();
  }
}
