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

console.log(document.querySelector("#tercero + li").textContent);
console.log(document.querySelectorAll("#tercero ~ li"));
console.log(document.querySelectorAll("li:has(~ #tercero)"));
console.log(document.querySelectorAll("li:not(#tercero)"));
console.log(document.querySelectorAll("li:nth-child(odd)"));