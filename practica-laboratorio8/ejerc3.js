
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function contarVocales(cadena) {
    let contador = 0;
    
    let textoMinuscula = cadena.toLowerCase();
    let vocales = "aeiouáéíóúü";

    for (let i = 0; i < textoMinuscula.length; i++) {
        if (vocales.includes(textoMinuscula[i])) {
            contador++;
        }
    }
    return contador;
}


function invertirCadena(cadena) {
    let invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];
    }
    return invertida;
}

function esPalindromo(cadena) {
    
    let limpio = "";
    let cadenaMinuscula = cadena.toLowerCase();

    for (let i = 0; i < cadenaMinuscula.length; i++) {
        
        let char = cadenaMinuscula[i];
        if (char >= 'a' && char <= 'z' || char >= '0' && char <= '9' || 
            char === 'á' || char === 'é' || char === 'í' || char === 'ó' || char === 'ú') {
            limpio += char;
        }
    }

    let invertido = invertirCadena(limpio);
    return limpio === invertido && limpio.length > 0;
}



rl.question("Ingrese una palabra o frase: ", (entrada) => {
   
    if (!entrada || entrada.trim() === "") {
        console.log("No ingresó texto válido.");
        rl.close();
        return;
    }

    
    let totalVocales = contarVocales(entrada);
    let cadenaInvertida = invertirCadena(entrada);
    let palindromo = esPalindromo(entrada);

    
    console.log("\n=== RESULTADOS DE ANÁLISIS DE CADENA ===");
    console.log(`Texto ingresado: "${entrada}"`);
    console.log(`Cantidad de vocales: ${totalVocales}`);
    console.log(`Cadena invertida: "${cadenaInvertida}"`);

    if (palindromo) {
        console.log("¿Es palíndromo?: SÍ (Se lee igual al derecho y al revés)");
    } else {
        console.log("¿Es palíndromo?: NO");
    }

    
    rl.close();
});