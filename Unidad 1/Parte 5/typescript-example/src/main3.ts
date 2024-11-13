interface Persona {
    nombre: string;
    edad: number;
}

interface Usuario extends Persona {
    email: string;
    password: string;
}

// Array de personas
const personas: Persona[] = [
    {
        nombre: "Ana",
        edad: 34,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Pepe",
        edad: 24,
    },
];
console.log(personas);

const usuario: Usuario = {
    nombre: "Admin",
    edad: 53,
    email: "a@a.es",
    password: "1234"
};
console.log(usuario);
