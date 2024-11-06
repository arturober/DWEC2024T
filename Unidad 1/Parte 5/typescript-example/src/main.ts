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