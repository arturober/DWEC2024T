const a = 24; // Tipado implícito (number)
console.log(a);

const array = ["Hola", "Adiós", "Pepe"];
// array.push(25); // Argument of type 'number' is not assignable to parameter of type 'string'
array.push("Qué tal");

const array2 = []; // No sirve tipado implícito (tipa como any[])
array2.push(45);
array2.push(true);
array2.push(new Date());

const numeros: number[] = [];
numeros.push(25);
// numeros.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'number'.

function suma(n1: number, n2: number): number {
  return n1 + n2;
}

const resultado = suma(23, 24);
console.log(resultado);
console.log(suma(3, 5)); // 8
// console.log(suma(3, "5")); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'

type Operacion = (n1: number, n2: number) => number;
// Recibe 2 parámetros de tipo number y devuelve un number
let  f: Operacion;
// No hace falta tipar parámetros o lo que devuelve al declararla
f = (n1, n2) => n1 + n2;
console.log(f(3, 5)); // 8
f = (n1, n2) => n1 - n2;
console.log(f(3, 5)); // -2

function operar(n1: number, n2: number, f: Operacion): number {
    return f(n1, n2);
}

console.log(operar(3, 5, f));
console.log(operar(3, 5, (n1, n2) => n1 * n2));

// UNIÓN DE TIPOS
function longitud(cifra: number | string): number {
  return String(cifra).length;
}

console.log(longitud(345)); // 3
console.log(longitud("6546")); // 4