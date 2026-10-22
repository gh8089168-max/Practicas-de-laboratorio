const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function filtrarParesMayoresA10(arregloNumeros) {
    let resultado = [];

    for (let i = 0; i < arregloNumeros.length; i++) {
        let numero = arregloNumeros[i];
        
        if (numero % 2 === 0 && numero > 10) {
            resultado.push(numero);
        }
    }

    return resultado;
}


rl.question("Ingrese varios números separados por comas (ej. 5, 12, 8, 20, 15, 24): ", (entrada) => {
    
    if (!entrada || entrada.trim() === "") {
        console.log("No ingresó ningún valor.");
        rl.close();
        return;
    }

    
    let partes = entrada.split(",");
    let numerosOriginales = [];

    for (let i = 0; i < partes.length; i++) {
        let num = parseFloat(partes[i].trim());
        if (!isNaN(num)) {
            numerosOriginales.push(num);
        }
    }

    
    let numerosFiltrados = filtrarParesMayoresA10(numerosOriginales);

    
    console.log("\n=== RESULTADOS ===");
    console.log(`Arreglo original ingresado: [${numerosOriginales.join(", ")}]`);
    console.log(`Números pares y mayores a 10: [${numerosFiltrados.join(", ")}]`);

    
    rl.close();
});