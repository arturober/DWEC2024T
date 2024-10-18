import { NOMBRE_GENERICO } from "./constantes.js";

export class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    static creaGenerico() {
        return new Producto(NOMBRE_GENERICO, 0);
    }
}