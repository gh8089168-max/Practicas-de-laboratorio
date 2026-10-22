
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function obtenerLetraCalificacion(calificacion) {
    if (calificacion >= 90 && calificacion <= 100) {
        return 'A';
    } else if (calificacion >= 80 && calificacion < 90) {
        return 'B';
    } else if (calificacion >= 70 && calificacion < 80) {
        return 'C';
    } else if (calificacion >= 60 && calificacion < 70) {
        return 'D';
    } else if (calificacion >= 0 && calificacion < 60) {
        return 'F';
    } else {
        return 'Inválida';
    }
}


function calcularPromedio(arregloCalificaciones) {
    if (arregloCalificaciones.length === 0) return 0;
    
    let suma = 0;
    for (let i = 0; i < arregloCalificaciones.length; i++) {
        suma += arregloCalificaciones[i];
    }
    
    return suma / arregloCalificaciones.length;
}

let calificaciones = [];
let cantidadTotal = 0;


rl.question("¿Cuántas calificaciones desea ingresar? ", (respuestaCantidad) => {
    cantidadTotal = parseInt(respuestaCantidad);

    if (isNaN(cantidadTotal) || cantidadTotal <= 0) {
        console.log("Por favor, ingrese un número válido mayor a 0.");
        rl.close();
        return;
    }

    
    pedirCalificacion(0);
});

function pedirCalificacion(indice) {
    if (indice < cantidadTotal) {
        rl.question(`Ingrese la calificación #${indice + 1} (0-100): `, (respuestaNota) => {
            let nota = parseFloat(respuestaNota);

            if (isNaN(nota) || nota < 0 || nota > 100) {
                console.log("Calificación inválida. Intente de nuevo este número.");
                
                pedirCalificacion(indice);
            } else {
                calificaciones.push(nota);
                
                pedirCalificacion(indice + 1);
            }
        });
    } else {
       
        mostrarResultados();
    }
}


function mostrarResultados() {
    console.log("\n=== RESULTADOS ===");

    
    for (let i = 0; i < calificaciones.length; i++) {
        let nota = calificaciones[i];
        let letra = obtenerLetraCalificacion(nota);
        console.log(`Calificación ${i + 1}: ${nota} -> Letra: ${letra}`);
    }

    
    let promedio = calcularPromedio(calificaciones);
    let letraPromedio = obtenerLetraCalificacion(promedio);

    console.log("------------------");
    console.log(`Promedio final: ${promedio.toFixed(2)}`);
    console.log(`Letra del promedio: ${letraPromedio}`);

    rl.close();
}