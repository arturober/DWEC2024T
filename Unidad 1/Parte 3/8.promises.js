const resultados = new Map();

function potenciaCuadrada(n) {
    if(n < 0) {
        return Promise.reject("No admito números negativos");
    }

    if(resultados.has(n)) {
        return Promise.resolve(resultados.get(n));
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const r = n ** 2;
            resultados.set(n, r);
            resolve(r)
        }, 2000);
    });
}

function pideNumero() {
    num = +prompt("Dime un número");
    if(num !== 0) {
        potenciaCuadrada(num).then(r => {
            alert("El resultado es " + r);
            pideNumero();
        }).catch(e => {
            console.error(e);
            alert("ERROR: El programa va a terminar")
        });
    }
}

pideNumero();
