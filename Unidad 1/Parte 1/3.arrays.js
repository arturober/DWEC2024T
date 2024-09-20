// FOrmas de crear arrays

let a = new Array();
console.log(a);

let a2 = new Array(10); // length 10 (undefined x 10)
console.log(a2);

let a3 = new Array(10, 20, 30, 40); // [10,20,30,40]
console.log(a3);

let a4 = [10]; // [10]
console.log(a4);

let a5 = [10, 20, 30, 40]; // [10,20,30,40]
console.log(a5.toString());

console.log(a5[2]); // 30
console.log(a5[25]); // undefined
console.log(a5[-6]); // undefined

a5[10] = 100;
console.log(a5.toString()); // 10,20,30,40,,,,,,,100
a5.length = 2;
console.log(a5.toString());