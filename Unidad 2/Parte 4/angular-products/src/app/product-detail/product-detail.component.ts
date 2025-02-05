import { DatePipe } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
  numberAttribute
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { Router, RouterLink } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { IntlCurrencyPipe } from '../pipes/intl-currency.pipe';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'product-detail',
  imports: [IntlCurrencyPipe, DatePipe, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  id = input.required({ transform: numberAttribute });
  #productsService = inject(ProductsService);
  #title = inject(Title);
  #router = inject(Router);

  productResource = rxResource({
    request: () => this.id(), // Dependencia
    loader: ({ request: id }) =>
      this.#productsService.getProduct(id).pipe(
        tap((p) => this.#title.setTitle(p.description + ' | Angular Products')),
        catchError(() => {
          this.#router.navigate(['/products']);
          return of(undefined);
        })
      ),
  });
  product = computed(() => this.productResource.value());
}
