document.getElementById("alert").addEventListener("click", e => {
    alert("Hola mundo!");
});

document.getElementById("confirm").addEventListener("click", e => {
    if(confirm("Do you like dogs?")) {
        console.log("You are a good person");
    } else {
        console.log("You have no soul");
    }
});

document.getElementById("prompt").addEventListener("click", e => {
    let name = prompt("What's your name?", "Nobody");

    if(name) {
        console.log("Your name is: " + name);
    } else {
        console.log("You didn't answer!");
    }
});