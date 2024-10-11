let date = new Date(); // Crea objeto Date almacena la fecha actual
console.log(typeof date); // Imprime object
console.log(date instanceof Date); // Imprime true

date = new Date(2024, 8, 4, 17, 7);
console.log(date.toString()); // Fri Jun 24 2016 12:27:32 GMT+0200 (CEST)
console.log(date.toISOString()); // Imprime 2016-06-26T18:00:31.246Z
console.log(date.toUTCString()); // Imprime Sun, 26 Jun 2016 18:02:48 GMT
console.log(date.toDateString()); // Imprime Sun Jun 26 2016
console.log(date.toLocaleDateString()); // Imprime 4/9/2024
console.log(date.toTimeString()); // Imprime 20:00:31 GMT+0200 (CEST)
console.log(date.toLocaleTimeString()); // Imprime 20:00:31

console.log(new Intl.DateTimeFormat('es-ES').format(date)); // 4/9/2024
console.log(new Intl.DateTimeFormat('es-ES', {
    dateStyle: "short"
}).format(date)); // 4/9/24
console.log(new Intl.DateTimeFormat('es-ES', {
    dateStyle: "long"
}).format(date)); // 4 de septiembre de 2024
console.log(new Intl.DateTimeFormat('es-ES', {
    dateStyle: "full"
}).format(date)); // miércoles, 4 de septiembre de 2024
console.log(new Intl.DateTimeFormat('es-ES', {
    day: "2-digit", month: "2-digit", year: "numeric"
}).format(date)); // 04/09/2024
console.log(new Intl.DateTimeFormat('es-ES', {
    day: "numeric", month: "long", year: "numeric" ,
    hour: '2-digit', minute: 'numeric', hourCycle: 'h12', dayPeriod: 'long'
}).format(date)); // 4 de septiembre de 2024, 05:07 de la tarde