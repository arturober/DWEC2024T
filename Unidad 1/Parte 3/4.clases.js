class Empleado {
  static #sueldoMinimo = 15000;

  constructor(nombre, sueldo) {
      this.nombre = nombre;
      this.sueldo = sueldo;
  }

  static creaBecario(nombre) {
      return new Empleado(nombre, Empleado.#sueldoMinimo);
  }
}

let e = Empleado.creaBecario("Elena");
console.log(e); // Empleado {nombre: 'Elena', sueldo: '15000'}