import { ProductoService } from "./producto-service.js";

const productoService = new ProductoService();

const productTemplate = document.getElementById("productTemplate");
const tbody = document.querySelector("#products tbody");


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

