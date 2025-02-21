import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

export const productResolver: ResolveFn<Product> = (route) => {
  const productsService = inject(ProductsService);
  const router = inject(Router);
  return productsService.getProduct(+route.params['id']).pipe(
    catchError(() => {
      router.navigate(['/products']);
      return EMPTY;
    })
  );
};
