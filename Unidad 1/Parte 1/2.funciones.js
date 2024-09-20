function sayHello(name) {
  console.log("Hello " + name);
}

sayHello("Tom"); // "Hello Tom"
sayHello(); // "Hello undefined"
sayHello("Peter", "asdf", 23); // "Hello Peter"

let totalPrice = function (priceUnit, units) {
  return priceUnit * units;
};
let totalPrice2 = totalPrice; // Ambos aputan a la misma función
console.log(totalPrice(12, 6)); // 72
console.log(totalPrice2(12, 6)); // 72

function operar(operacion, n1, n2) {
  return operacion(n1, n2);
}

function resta(n1, n2) {
  return n1 - n2;
}

console.log(
  operar(
    function (n1, n2) {
      return n1 + n2;
    },
    15,
    26
  )
);

console.log(operar(resta, 15, 26)); // -11
console.log(operar((n1,n2) => n1 * n2, 15, 26)); // 390

function sayHello2(name = "Anónimo") { // name es opcional
  console.log("Hola " + name);
}

sayHello2(); // Hola Anónimo
sayHello2(null); // Hola null