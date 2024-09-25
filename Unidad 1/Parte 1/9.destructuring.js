let array = [150, 400, 780, 1500, 200];
let [n1, n2, n3] = array;
console.log(`${n1} - ${n2} - ${n3}`);

let [num1, num2, ...resto] = array;
console.log(num1, num2, resto);

let nombres = ["Peter", "John"];
let [v1, v2 = "Mary", v3 = "Anne"] = nombres;
console.log(v2); // Imprime "John"
console.log(v3); // Imprime "Anne" -> valor por defecto

let sueldos = [["Pedro", "Maria"], [24000, 35400]];
let [[nombre1, nombre2], [sueldo1, sueldo2]] = sueldos;
console.log(nombre1 + " gana " + sueldo1 + "€"); // Imprime "Pedro gana 24000€"
console.log(nombre2 + " gana " + sueldo2 + "€"); // Imprime "Pedro gana 24000€"

function areaRect([ancho, alto]) {
    return ancho * alto;
}

const rect = [4, 7];
console.log(areaRect(rect));