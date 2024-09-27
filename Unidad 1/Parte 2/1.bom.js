'use strict';
// Tamaño total de la ventana (excluye la barra superior del navegador)
console.log(window.outerWidth + " - " + window.outerHeight);
window.open("https://www.google.com");

// Propiedades de la pantalla
console.log(screen.width + " - " + screen.height); // Ancho de pantalla y alto (Resolución)
console.log(screen.availWidth + " - " + screen.availHeight); // Excluyendo la barra del S.O.

// Propiedades del navegador
console.log(navigator.userAgent); // Imprime la información del navegador
navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
});

//  Podemos omitir el objeto window (está implícito)
console.log(history.length); // Páginas visitadas en la pestaña actual. Lo mismo que window.history.length

const btnGoogle = document.getElementById("btnGoogle");
btnGoogle.addEventListener("click", e => location.assign("https://google.es"));