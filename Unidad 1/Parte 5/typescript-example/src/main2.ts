// Se puede hacer también una unión de valores literales
type Rol = "admin" | "usuario" | "invitado";

class Persona {
    nombre: string;
    rol: Rol; // Solo puede ser "admin", "usuario" o "invitado"

    constructor(nombre: string, rol: Rol) {
        this.nombre = nombre;
        this.rol = rol;
    }
}

const p = new Persona("Juan", "admin"); // OK
// p = new Persona("Pepe", "mago"); // ERROR: Argument of type '"mago"' is not assignable to parameter of type 'Rol'
console.log(p);