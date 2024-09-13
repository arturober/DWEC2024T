"use strict";

for(let i = 1; i <= 10; i++) {
    let p = document.createElement("p");
    p.textContent = `Párrafo ${i}`;
    p.addEventListener("click", e => {
        console.log(`Click en Párrafo ${i}`);
    });
    document.body.append(p);
}

function modArray(a) {
    a[0] = 99;
}

let a = [1,2,3,4,5];
let b = [...a];
b[0] = 99;
// modArray(a);
console.log(a); 