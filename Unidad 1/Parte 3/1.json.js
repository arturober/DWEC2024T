let obj = new Object();
obj.nombre = "Peter"; // Añadimos la propiedad 'nombre' usando la notación del punto
obj["edad"] = 41; // Añadimos la propiedad 'edad' usando la notación de un array asociativo
obj.getInfo = function() { // Creamos un nuevo método → getInfo()
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad
}

console.log(obj.getInfo()); // Imprime "Mi nombre es Peter y tengo 41"
console.log(obj.nombre); // Imprime "Peter". Accedemos al nombre usando la notación del punto
console.log(obj["nombre"]); // Imprime "Peter". Ahora accedemos con la notación del array asociativo
let prop = "nombre";
console.log(obj[prop]); // Imprime "Peter". Podemos acceder a la propiedad “nombre” a partir de una variable que almacena el nombre de dicha propiedad (sólo para la notación de array)
console.log(obj);

let obj2 = {
    nombre: "Peter",
    edad: 41,
    getInfo () { // Método
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad
    }
}

console.log(obj2);

let persona = {
    nombre: "Peter",
    edad: 41,
    trabajos: [ // trabajos es un array de objetos JSON
        {
            descripcion: "Malabarista",
            duracion: "2003-2005"
        },
        {
            descripcion: "Conductor de autobús",
            duracion: "2005-2015"
        }
    ],
    telefonos: ["234543654", "654754687"]
  }
  
  console.log(persona.trabajos[1].descripcion); // Imprime "Conductor de autobús”