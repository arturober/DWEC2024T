const formPersona = document.getElementById("formPersona");
const imgPreview = document.getElementById("imgPreview");
const tbody = document.querySelector("#personas > tbody");

formPersona.addEventListener("submit", (e) => {
  e.preventDefault();
  const hobbies = Array.from(formPersona.hobbies)
    .filter((i) => i.checked)
    .map((i) => i.value);
  
  const tr = document.createElement("tr");
  const tdAvatar = document.createElement("td");
  const avatar = document.createElement("img");
  avatar.src = imgPreview.src;
  tdAvatar.append(avatar);
  const tdNombre = document.createElement("td");
  tdNombre.textContent = formPersona.nombre.value;
  const tdHobbies = document.createElement("td");
  tdHobbies.textContent = hobbies.join(", ");

  tr.append(tdAvatar, tdNombre, tdHobbies);
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
