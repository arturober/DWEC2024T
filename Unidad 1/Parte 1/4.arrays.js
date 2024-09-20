// Recorrer arrays
let a = [23, 14, 6, 46, 72, 19];

console.log("------- FOR IN -------");
for (let i in a) {
  console.log(`${i} -> ${a[i]}`);
}

console.log("------- FOR OF -------");
for (let n of a) {
  console.log(n);
}

console.log("------- .forEach -------");
a.forEach((n, i) => console.log(`${i} -> ${n}`));
