const btn = document.getElementById("btn");

btn.addEventListener('click', e => {
    console.log("Click en el botón");
});

const aGoogle = document.getElementById("google");
const desactivar = document.getElementById("desactivar");

aGoogle.addEventListener("click", e => {
    if(desactivar.checked) {
        e.preventDefault();
    }
});

const div1 = document.getElementById("div1");
div1.addEventListener("mousemove", e => {
    div1.textContent = `${e.offsetX}, ${e.offsetY}`;
});

const div2 = document.getElementById("div2");
div2.addEventListener("mousemove", function(e) {
    const red = e.offsetX;
    const green = e.offsetY;
    const blue = 255 - e.offsetY;
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});