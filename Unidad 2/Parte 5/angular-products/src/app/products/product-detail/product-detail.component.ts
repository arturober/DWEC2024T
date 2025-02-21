import { DatePipe } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  effect,
  inject,
  input
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Product } from '../interfaces/product';
import { IntlCurrencyPipe } from '../../shared/pipes/intl-currency.pipe';
import { ProductsService } from '../services/products.service';
import { StarRatingComponent } from '../../shared/star-rating/star-rating.component';

@Component({
  selector: 'product-detail',
  imports: [IntlCurrencyPipe, DatePipe, StarRatingComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  // id = input.required({ transform: numberAttribute });
  #productsService = inject(ProductsService);
  product = input.required<Product>();
  #title = inject(Title);
  #router = inject(Router);
  #destroyRef = inject(DestroyRef);
  #changeDetector = inject(ChangeDetectorRef);

  constructor() {
    effect(() =>  this.#title.setTitle(this.product().description + ' | Angular Products'));
  }

  // productResource = rxResource({
  //   request: () => this.id(), // Dependencia
  //   loader: ({ request: id }) =>
  //     this.#productsService.getProduct(id).pipe(
  //       tap((p) => this.#title.setTitle(p.description + ' | Angular Products')),
  //       catchError(() => {
  //         this.#router.navigate(['/products']);
  //         return EMPTY;
  //       })
  //     ),
  // });

  changeRating(rating: number) {
    const product = this.product();
    const oldRating = product.rating;
    product.rating = rating;

    this.#productsService
      .changeRating(product.id!, rating)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        error: () => {
          product.rating = oldRating;
          this.#changeDetector.markForCheck();
        },
      });
  }

  goBack() {
    this.#router.navigate(['/products']);
  }
}
