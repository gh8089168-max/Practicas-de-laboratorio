import readline from "node:readline";

const ft = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

})

ft.question("Ingresa numero de lados de una figura(ej. 3, 4, 5, 6): no", (numero) => {

    let figuras = parseInt(numero)

    switch (figuras) {
        case 3:
            console.log(`Triángulo`);
            break;
        case 4:
            console.log(`Cuadrilatero`);
            break;
        case 5:
            console.log(`Pentágono`);
            break;
        case 6:
            console.log(`Hexagono`);
            break;
        default:
            console.log(`Fifura no reconocida`);

    }
    ft.close();

})

