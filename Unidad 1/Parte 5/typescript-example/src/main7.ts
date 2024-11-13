class Persona {
    nombre!: string; // Property 'nombre' has no initializer and is not definitely assigned in the constructor
    edad!: number; // Property 'edad' has no initializer and is not definitely assigned in the constructor

    private constructor() {} // Constructor privado, no se puede invocar fuera

    static crear(nombre: string, edad: number) { // Método constructor estático
        const p = new Persona();
        p.nombre = nombre;
        p.edad = edad;
        return p;
    }

    toString() {
        return `${this.nombre} - ${this.edad}`;
    }
}

const p = Persona.crear("Juan", 23);
console.log(p); // Juan - 23