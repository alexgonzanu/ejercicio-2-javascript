let palabraCamelInicial = "adiosMarioHastaMañana";

function convertirFraseSnake() {
    let palabraSinCamel = palabraCamelInicial.split((/(?=[A-Z])/));
    let frase;
    for (let i = 0; i < palabraSinCamel.length; i++) {
        if (typeof frase === "undefined") {
            frase = palabraSinCamel[i];
        } else {
            frase += ` ${palabraSinCamel[i]}`;
        }
    }
    frase = frase.replaceAll(' ', '_');
    return frase;
}

const fraseSnake = convertirFraseSnake();
console.log(fraseSnake);