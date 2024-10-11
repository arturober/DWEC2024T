let str = "I am amazed in America";
let reg = /am/gi; 
console.log(reg instanceof RegExp); // true
let match;
while(match = reg.exec(str)) {
    console.log("Patrón encontrado!: " + match[0] + ", en la posición: " + match.index);
}
/* Esto imprimirá:
  * Patrón encontrado!: am, en la posición: 2
  * Patrón encontrado!: am, en la posición: 5
  * Patrón encontrado!: Am, en la posición: 15 */

const str2 = "Ayer fue 10/10/2024 y no me acuerdo que comí el 19/07/2023";
const fechaReg = /\d{2}\/\d{2}\/\d{4}/g;
console.log(str2.match(fechaReg));

console.log(str.replace(/am/gi, "xx")); // Imprime "I xx xxazed in xxerica"
console.log(str.replace(/am/gi, function(match) {
    return "-" + match.toUpperCase() + "-";
})); // Imprime "I -AM- -AM-azed in -AM-erica"

const str3 = str2.replace(fechaReg, (match) => {
    const [dia, mes, anyo] = match.split("/");
    const date = new Date(`${anyo}-${mes}-${dia}`);
    return new Intl.DateTimeFormat('es', {
        day: 'numeric', month: 'long', year: 'numeric'
    }).format(date);
});
console.log(str3);