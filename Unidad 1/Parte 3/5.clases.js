class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }

    toString() {
        return `${this.nombre} (${this.edad})`
    }
}

class Usuario extends Persona {
    constructor(nombre, edad, email, password) {
        super(nombre, edad);
        this.email = email;
        this.password = password;
    }

    saluda() {
        super.saluda();
        console.log(`Mi correo es ${this.email}`);
    }
}

const u = new Usuario("Pepe", 23, "pepe@email.com", "1234");
console.log(u);
u.saluda();
console.log(`Datos usuario: ${u}`);