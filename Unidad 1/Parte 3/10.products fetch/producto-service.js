import { Http } from './http.js';
import { SERVER } from './constants.js';

export class ProductoService {
  #http;
  constructor() {
    this.#http = new Http();
  }

  async getProductos() {
    const resp = await this.#http.get(`${SERVER}/products`);
    return resp.products;
  }

  async add(producto) {
    const resp = await this.#http.post(`${SERVER}/products`, producto);
    return resp.product;
  }

  async update(producto) {
    const resp = await this.#http.put(`${SERVER}/products/${producto.id}`, product);
    return resp.product;
  }

  delete(id) {
    return this.#http.delete(`${SERVER}/products/${id}`);
  }
}