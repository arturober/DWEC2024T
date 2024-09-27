setTimeout(() => console.log("Hola después de 3 segundos"), 3000);
console.log("HOla mundo!");

let num = 1;
const idInterval = setInterval(() => {
    console.log(num++);
    if(num > 10) {
        clearInterval(idInterval);
    }
}, 1000); // Imprime un número y lo incrementa cada segundo