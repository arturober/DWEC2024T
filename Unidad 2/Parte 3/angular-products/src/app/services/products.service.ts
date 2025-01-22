import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ProductsResponse } from '../interfaces/responses';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #urlProducts = 'https://api.fullstackpro.es/products-example/products';
  #http = inject(HttpClient);

  getProducts() {
    return this.#http
      .get<ProductsResponse>(this.#urlProducts)
      .pipe(map((r) => r.products));
  }
}
