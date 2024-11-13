// Private vs #

class Persona {
    nombre: string;
    edad: number;
    #rol: string;

    constructor(nombre: string, edad: number, rol: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.#rol = rol;
    }

    toString() {
        return `${this.nombre} - ${this.edad} - ${this.#rol}`
    }
}

const p = new Persona("Juan", 42, "admin");
Object.entries(p).forEach(([k, v]) => console.log(`${k} => ${v}`)); // Recorremos las propiedades del objeto
console.log(p);
