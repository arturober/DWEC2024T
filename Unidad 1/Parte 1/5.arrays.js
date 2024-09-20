let a = ["a"];
a.push("b", "c", "d"); // Inserta nuevos valores al final del array
console.log(a.toString()); // Imprime ["a", "b", "c", "d"]
a.unshift("A", "B", "C"); // Inserta nuevos valores al principio del array
console.log(a.toString()); // Imprime ["A", "B", "C", "a", "b", "c", "d"]

console.log(a.pop()); // Imprime y elimina la última posición → "d"
console.log(a.shift()); // Imprime y elimina la primera posición → "A"
console.log(a.toString()); // B,C,a,b,c
console.log(a.join(" - ")); // B - C - a - b - c

let s = "tenedor";
console.log(Array.from(s)); // ['t', 'e', 'n', 'e', 'd', 'o', 'r']

a = ["a", "b", "c", "d", "e", "f"];
a.splice(1, 3); // Elimina 3 elementos desde la posición 1 ("b", "c", "d")
console.log(a); // Imprime ["a", "e", "f"]
a.splice(1, 1, "g", "h"); // Elimina 1 elemento en la posición 1 ("e"), e inserta "g", "h" en esa posición
console.log(a); // Imprime ["a", "g", "h", "f"]
a.splice(3, 0, "i"); // En la posición 3, no elimina nada, e inserta "i"
console.log(a); // Imprime ["a", "g", "h", "i", "f"]

let a2 = a.toSpliced(2, 1, "H");
console.log(a); // ["a", "g", "h", "i", "f"] -> No modificado
console.log(a2); // ["a", "g", "H", "i", "f"]

console.log(a2.toReversed());

let nombres = ["Peter", "Anne", "Thomas", "Jen", "Rob", "Alison"];
console.log(nombres.toSorted()); // ['Alison', 'Anne', 'Jen', 'Peter', 'Rob', 'Thomas']

let nums = [3, 18, 119, 25, 9, 81, 204];
nums.sort();
console.log(nums); // [119, 18, 204, 25, 3, 81, 9]
nums.sort((n1, n2) => n1 - n2);
console.log(nums);

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  toString() {
    return this.nombre + " (" + this.edad + ")";
  }
}

let personas =  [
    new Persona("Thomas", 24),
    new Persona("Mary", 15),
    new Persona("John", 51),
    new Persona("Phillip", 9)
];
personas.sort((p1, p2) => p1.edad - p2.edad);
console.log(personas.toString());
personas.sort((p1, p2) => p1.nombre.localeCompare(p2.nombre));
console.log(personas.toString());
