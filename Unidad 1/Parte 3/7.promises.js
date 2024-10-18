function sumaPromesa(n1, n2) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(n1 + n2), 2000);
    });
}

// Sumar 4 + 8 + 6 + 10
// sumaPromesa(4, 8).then(r => {
//     sumaPromesa(r, 6).then(r2 => {
//         sumaPromesa(r2, 10).then(r3 => console.log(r3));
//     });
// });
sumaPromesa(4,8)
.then(r => sumaPromesa(r, 6))
.then(r => sumaPromesa(r, 10))
.then(r => console.log(r));

console.log("El programa sigue");