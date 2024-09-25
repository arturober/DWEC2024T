let nums = [12, 32, 6, 8, 23];

console.log(Math.max(...nums));
console.log(Math.min(...nums));

let nums2 = [...nums]; // Clonar array

let a1 = [1,2,3,4];
let a2 = [5,6,7,8];
let a3 = [...a1, ...a2, 9, 10];
console.log(a3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]