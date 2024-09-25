let a = [3, 21, 16, 61, 9, 54];

a.forEach((num, indice, array) => { // índice y array son parámetros opcionales
    console.log(indice + " -> " + num);
});

console.log(a.every(num =>  num < 100));  // Comprueba si cada número es menor a 100. Imprime true
console.log(a.every(num => num % 2 == 0)); // Comprueba si cada número es par. Imprime false

console.log(a.some(num => num % 2 == 0));  // Comprueba si algún elemento del array es par. Imprime true

console.log(a.map(n => n * 2));
console.log(a.filter(num => num % 2 == 0)); 

console.log(a.reduce((total, num) => total + num, 0));  // Suma todos los elementos del array. Imprime 164
console.log(a.reduce((max, num) => Math.max(max, num), 0));  // Número máximo del array. Imprime 61

console.log(a.reduceRight((total, num)  => total - num)); // Imprime -56 (Toma la última posición como valor inicial al no proporcionarlo)

console.log(a.find(num => num >= 10)); // 21
console.log(a.findIndex(num => num >= 10)); // 1

let words = ["house", "tree", "dog"];
console.log(words.map(w => Array.from(w)).flat()); // [["h", "o", "u", "s", "e"], ["t", "r", "e", "e"], ["d", "o", "g"]]
console.log(words.flatMap(w => Array.from(w))); // ["h", "o", "u", "s", "e", "t", "r", "e", "e", "d", "o", "g"]
