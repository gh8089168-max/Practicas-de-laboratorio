import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,

});

rl.question("Ingresa tu nivel de estudio (ej. 1-5): ", (numero) => {
    let nivel = parseInt(numero)

    switch (nivel) {
        case 1:
            console.log(`Primaria`);
            break;
        case 2:
            console.log(`Secundaria`);
            break;
        case 3:
            console.log(`Bachillerato`);
            break;
        case 4:
            console.log(`Universidad`);
            break;
        case 5:
            console.log(`Postgrado`);
            break;
        default:
            console.log(`Nivel no valido`);


    }
    rl.close();

})