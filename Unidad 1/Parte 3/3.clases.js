class Product {
  #nombre;
  #precio;

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  get nombre() { // Getter
    return this.#nombre;
  }

  set nombre(nombre) { // Setter
    if(!nombre) throw Error("El nombre no puede estar vacío"); 
    this.#nombre = nombre;
  }

  get precio() { // Getter
    return this.#nombre;
  }

  set precio(precio) { // Setter
      this.#precio = precio;
  }

  getDescuento(descuento) {
    let totalDesc = (this.#precio * descuento) / 100;
    return this.#precio - totalDesc;
  }

  toString() {
    return `${this.#nombre} (${this.#precio.toFixed(2)}€)`;
  }
}

const p = new Product("Silla", 23);
console.log(p.nombre);
// p.nombre = null; // Uncaught Error: El nombre no puede estar vacío
// console.log(p.#precio); // Uncaught SyntaxError: Private field '#precio' must be declared in an enclosing class

class Cuadrado {
  #lado;

  constructor(lado) {
    this.#lado = lado;
  }

  get lado() {
    return this.#lado;
  }

  get area() {
    return this.#lado ** 2;
  }
}

const cuadrado = new Cuadrado(4);
console.log(cuadrado.lado);
console.log(cuadrado.area);