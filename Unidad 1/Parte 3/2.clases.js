class Product {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  getDescuento(descuento) {
    let totalDesc = (this.precio * descuento) / 100;
    return this.precio - totalDesc;
  }

  toString() {
    return `${this.nombre} (${this.precio.toFixed(2)}€)`;
  }
}

// console.log(typeof Product); // Imprime "function". Internamente sigue siendo una función como en versiones antiguas
// console.log(Product);

const p = new Product("silla", 23);
console.log(p);
console.log(p.nombre, p.precio);
console.log(p.toString());
