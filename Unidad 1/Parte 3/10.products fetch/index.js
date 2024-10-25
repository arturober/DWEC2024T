import { ProductoService } from "./producto-service.js";

const productoService = new ProductoService();

const productTemplate = document.getElementById("productTemplate");
const tbody = document.querySelector("#products tbody");
const form = document.getElementById("formProducto");
const imgPreview = document.getElementById("imgPreview");

async function getProductos() {
    const productos = await productoService.getProductos();
    productos.forEach(showProducto);
}

function showProducto(producto) {
    const clone = productTemplate.content.cloneNode(true);
    const tr = clone.children[0];
    tr.querySelector("img").src = producto.imageUrl;
    tr.children[1].textContent = producto.description;
    tr.children[2].textContent = producto.price;
    tr.children[3].textContent = producto.available;
    tr.querySelector("button.delete").addEventListener("click", async () => {
        await productoService.delete(producto.id);
        tr.remove();
    });
    tbody.append(tr);
}

getProductos();

form.addEventListener("submit", async e => {
    e.preventDefault();
    const producto = {
        description: form.description.value,
        price: +form.price.value,
        available: new Date().toISOString().slice(0,19),
        imageUrl: imgPreview.src,
        rating: 1
    };
    const pInsert = await productoService.add(producto);
    showProducto(pInsert);
    form.reset();
    imgPreview.src = "";
});

form.image.addEventListener("change", () => {
    const file = form.image.files[0];
    if(!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", () => {
        imgPreview.src = fileReader.result;
    });
});