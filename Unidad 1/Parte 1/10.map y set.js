let person1 = {name: "Peter", age: 21};
let person2 = {name: "Mary", age: 34};
let person3 = {name: "Louise", age: 17};

let hobbies = new Map(); // Almacenará una persona con un array de hobbies (string)
hobbies.set(person1, ["Tennis", "Computers", "Movies"]);
hobbies.set(person2, ["Music", "Walking"]);
hobbies.set(person3, ["Boxing", "Eating", "Sleeping"]);
console.log(hobbies);

console.log(hobbies.has(person1)); // true (referencia al objeto original almacenado)
console.log(hobbies.has({name: "Peter", age: 21})); // false (mismas propiedades pero objeto diferente!)

 // Continuamos con el código anterior
 console.log(hobbies.size); // Imprime 3
 hobbies.delete(person2); // Elimina person2 del Map
 console.log(hobbies.size); // Imprime 2
 console.log(hobbies.get(person3)[2]); // Imprime "Sleeping"

 hobbies.forEach((hobArray, person) => { // Mejor
    console.log(person.name + ": " + hobArray.join(", "));
});

let set = new Set();
set.add("John");
set.add("Mary");
set.add("Peter");
set.add("Ana");
set.add("Rambo");
set.add("Tom");

set.delete("Peter");
console.log(set.size); 

set.forEach(n => console.log(n));

// Eliminar elementos repetidos de un array
let names = ["Jennifer", "Alex", "Tony", "Johny", "Alex", "Tony", "Alex"];
let nameSet = new Set(names);
console.log(nameSet); // Set {"Jennifer", "Alex", "Tony", "Johny"}
names = [...nameSet];

console.log([..."Hola mundo"]); // ['H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o']