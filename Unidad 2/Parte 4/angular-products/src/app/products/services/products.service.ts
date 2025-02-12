import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ProductsResponse, SingleProductResponse } from '../interfaces/responses';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #urlProducts = 'products';
  #http = inject(HttpClient);

  getProducts() {
    return this.#http
      .get<ProductsResponse>(this.#urlProducts)
      .pipe(map((r) => r.products));
  }

  getProduct(id: number): Observable<Product> {
    return this.#http
      .get<SingleProductResponse>(`${this.#urlProducts}/${id}`)
      .pipe(map((resp) => resp.product));
  }

  changeRating(idProduct: number, rating: number): Observable<void> {
    return this.#http.put<void>(`${this.#urlProducts}/${idProduct}/rating`, {
      rating: rating,
    });
  }

  insertProduct(product: Product): Observable<Product> {
    return this.#http
      .post<SingleProductResponse>(this.#urlProducts, product)
      .pipe(map((resp) => resp.product));
  }

  deleteProduct(id: number): Observable<void> {
    return this.#http.delete<void>(`${this.#urlProducts}/${id}`);
  }
}
