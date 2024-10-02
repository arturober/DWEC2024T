const lista = document.getElementById("lista");

lista.firstElementChild.classList.toggle("green");
lista.lastElementChild.classList.toggle("green");

const enlace = document.createElement("a");
enlace.href = "https://google.es";
enlace.title = "Ve a Google";
enlace.textContent = "Google";
enlace.style.backgroundColor = "red";
enlace.style.color = "white";

lista.lastElementChild.append(enlace);
lista.lastElementChild.dataset.id = "234";

