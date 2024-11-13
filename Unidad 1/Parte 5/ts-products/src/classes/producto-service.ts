import { Http } from "./http.js";
import { SERVER } from "../constants.js";
import {
  ProductListResponse,
  SingleProductResponse,
} from "../interfaces/responses.js";
import { Product } from "../interfaces/product.js";

export class ProductoService {
  #http;
  constructor() {
    this.#http = new Http();
  }

  async getProductos(): Promise<Product[]> {
    const resp = await this.#http.get<ProductListResponse>(
      `${SERVER}/products`
    );
    return resp.products;
  }

  async add(producto: Product): Promise<Product> {
    const resp = await this.#http.post<SingleProductResponse, Product>(
      `${SERVER}/products`,
      producto
    );
    return resp.product;
  }

  async update(producto: Product) {
    const resp = await this.#http.put<SingleProductResponse, Product>(
      `${SERVER}/products/${producto.id}`,
      producto
    );
    return resp.product;
  }

  delete(id: number) {
    return this.#http.delete<void>(`${SERVER}/products/${id}`);
  }
}
