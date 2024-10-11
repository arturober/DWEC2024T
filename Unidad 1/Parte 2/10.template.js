const formPersona = document.getElementById("formPersona");
const imgPreview = document.getElementById("imgPreview");
const tbody = document.querySelector("#personas > tbody");
const userTemplate = document.getElementById("userTemplate");

formPersona.addEventListener("submit", (e) => {
  e.preventDefault();
  const hobbies = Array.from(formPersona.hobbies)
    .filter((i) => i.checked)
    .map((i) => i.value);
  
  const userHTML = userTemplate.content.cloneNode(true);
  const tr = userHTML.firstElementChild;

  tr.querySelector("img").src = imgPreview.src;
  tr.children[1].textContent = formPersona.nombre.value;
  tr.children[2].textContent = hobbies;
  tr.querySelector("button").addEventListener("click", e => tr.remove());

  tbody.append(tr);

  formPersona.reset();
  imgPreview.src = "";
});

formPersona.avatar.addEventListener("change", (event) => {
  let file = formPersona.avatar.files[0];
  let reader = new FileReader();
  if (file) reader.readAsDataURL(file); // Serializar en base64
  reader.addEventListener("load", (e) => {
    // Serialización terminada
    imgPreview.src = reader.result; // Datos en Base64
  });
});
