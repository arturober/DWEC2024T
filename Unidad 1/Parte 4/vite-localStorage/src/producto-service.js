export class ProductoService {
  #productos;

  constructor() {
    const productos = localStorage.getItem("productos") || "[]";
    this.#productos = JSON.parse(productos);
  }

  async getProductos() {
    return this.#productos;
  }

  async add(producto) {
    this.#productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(this.#productos));
  }

  delete(producto) {
    this.#productos = this.#productos.filter(p => p !== producto);
    localStorage.setItem("productos", JSON.stringify(this.#productos));
  }
}