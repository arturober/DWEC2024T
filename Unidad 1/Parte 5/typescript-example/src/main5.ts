class Persona {
    constructor(public nombre: string, public edad: number) { }

    saluda() {
        console.log(`Hola, me llamo ${this.nombre}`);
    }

    toString() {
        return `${this.nombre} (${this.edad})`;
    }
}

class Usuario extends Persona {
    constructor(nombre: string, edad: number, public email: string, public password: string) {
        super(nombre, edad);
    }

    saluda() {
        console.log(`Mi correo es ${this.email}`);
    }
}

const p: Persona = new Usuario("Juan", 35, "juan@email.com", "1234");
p.saluda();
if(p instanceof Usuario) {
    console.log(p.email);
}