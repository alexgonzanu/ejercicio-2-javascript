let palabraSnake = "hola_mario_como_estas"
let palabraMayuscula, fraseCompleta;

function completarFrase() {
    if (typeof fraseCompleta === "undefined") {
        fraseCompleta = palabraMayuscula;
    } else {
        fraseCompleta += palabraMayuscula;
    }
}

function convertirFraseCamel() {
    let palabraSinSnake = palabraSnake.split("_");

    for (let i = 0; i < palabraSinSnake.length; i++) {
        if (i == 0) {
            palabraMayuscula = palabraSinSnake[i];
        } else {
            palabraMayuscula = palabraSinSnake[i].charAt(0).toUpperCase() + palabraSinSnake[i].slice(1);
        }
        completarFrase();
    }
    return fraseCompleta;
}

const palabraCamel = convertirFraseCamel();

console.log(palabraCamel);

