const lista = document.getElementById("lista");

const li4 = document.createElement("li");
li4.textContent = "Elemento 4";
lista.append(li4);

// ESTO NO!!!
// lista.innerHTML = lista.innerHTML + '<li><img src="" onerror="alert(\'ERES MIO!!!\')"></li>';

const li0 = document.createElement("li");
li0.textContent = "Elemento 0";
lista.prepend(li0);

const li2 = lista.children[2];
const li2_5 = document.createElement("li");
li2_5.textContent = "Elemento 2.5";
li2.after(li2_5);

const li1_5 = document.createElement("li");
li1_5.textContent = "Elemento 1.5";
li2.before(li1_5);

li2.remove();

const li1_5new = document.createElement("li");
li1_5new.textContent = "Elemento Nuevo 1.5";
li1_5.replaceWith(li1_5new);

// lista.replaceChildren(); // Vacío borra el contenido