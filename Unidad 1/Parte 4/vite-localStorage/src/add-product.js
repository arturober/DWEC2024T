import { ProductoService } from "./producto-service";

const productoService = new ProductoService();

const form = document.getElementById("formProducto");
const imgPreview = document.getElementById("imgPreview");

form.addEventListener("submit", async e => {
    e.preventDefault();
    const producto = {
        description: form.description.value,
        price: +form.price.value,
        available: new Date().toISOString().slice(0,19),
        imageUrl: imgPreview.src,
        rating: 1
    };
    await productoService.add(producto);
    location.assign("index.html");
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