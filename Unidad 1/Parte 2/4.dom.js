const normalLinks = document.getElementsByClassName("normalLink");
console.log(normalLinks[0]);
Array.from(normalLinks).forEach(a => console.log(a));

const lista = document.getElementById("lista");
console.log(lista.firstElementChild);
console.log(lista.firstChild);

console.log(lista.children);
console.log(lista.childNodes);

console.log(lista.firstElementChild.textContent);
console.log(lista.parentElement);

let li = lista.firstElementChild;
while(li = li.nextElementSibling) {
    console.log(li);
}

console.log(document.querySelector("#tercero + li").textContent); // HErmano (li) siguiente al li con id tercero
console.log(document.querySelectorAll("#tercero ~ li")); // Hermanos posteriores al li con id tercero
console.log(document.querySelectorAll("li:has(~ #tercero)")); // Hermanos anteriores al elemento con id tercero
console.log(document.querySelectorAll("li:not(#tercero)")); // li que no tengan la id tercero (todos los hermanos)
console.log(document.querySelectorAll("li:nth-child(odd)")); // li impares