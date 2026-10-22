
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// 1. Círculo 
function areaCirculo(radio) {
    return Math.PI * Math.pow(radio, 2);
}
function perimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

// 2. Cuadrado 
function areaCuadrado(lado) {
    return Math.pow(lado, 2);
}
function perimetroCuadrado(lado) {
    return 4 * lado;
}

// 3. Rectángulo 
function areaRectangulo(base, altura) {
    return base * altura;
}
function perimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

// 4. Triángulo 
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function perimetroTriangulo(ladoA, ladoB, ladoC) {
    return ladoA + ladoB + ladoC;
}



function mostrarMenu() {
    console.log("\n=== MENÚ FIGURAS GEOMÉTRICAS ===");
    console.log("1. Círculo");
    console.log("2. Cuadrado");
    console.log("3. Rectángulo");
    console.log("4. Triángulo");
    console.log("5. Salir");

    rl.question("\nElija una opción (1-5): ", (opcion) => {
        switch (opcion.trim()) {
            case '1':
                pedirDatosCirculo();
                break;
            case '2':
                pedirDatosCuadrado();
                break;
            case '3':
                pedirDatosRectangulo();
                break;
            case '4':
                pedirDatosTriangulo();
                break;
            case '5':
                console.log("¡Hasta luego!");
                rl.close();
                break;
            default:
                console.log("Opción inválida. Por favor, elija un número entre 1 y 5.");
                mostrarMenu();
                break;
        }
    });
}


function pedirDatosCirculo() {
    rl.question("Ingrese el radio del círculo: ", (inputRadio) => {
        let radio = parseFloat(inputRadio);
        if (isNaN(radio) || radio <= 0) {
            console.log("Valor inválido.");
            return mostrarMenu();
        }
        let area = areaCirculo(radio);
        let perimetro = perimetroCirculo(radio);

        console.log("\n--- RESULTADOS CÍRCULO ---");
        console.log(`Área: ${area.toFixed(2)}`);
        console.log(`Perímetro: ${perimetro.toFixed(2)}`);
        mostrarMenu();
    });
}

function pedirDatosCuadrado() {
    rl.question("Ingrese el lado del cuadrado: ", (inputLado) => {
        let lado = parseFloat(inputLado);
        if (isNaN(lado) || lado <= 0) {
            console.log("Valor inválido.");
            return mostrarMenu();
        }
        let area = areaCuadrado(lado);
        let perimetro = perimetroCuadrado(lado);

        console.log("\n--- RESULTADOS CUADRADO ---");
        console.log(`Área: ${area.toFixed(2)}`);
        console.log(`Perímetro: ${perimetro.toFixed(2)}`);
        mostrarMenu();
    });
}

function pedirDatosRectangulo() {
    rl.question("Ingrese la base del rectángulo: ", (inputBase) => {
        let base = parseFloat(inputBase);
        rl.question("Ingrese la altura del rectángulo: ", (inputAltura) => {
            let altura = parseFloat(inputAltura);
            if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0) {
                console.log("Valores inválidos.");
                return mostrarMenu();
            }
            let area = areaRectangulo(base, altura);
            let perimetro = perimetroRectangulo(base, altura);

            console.log("\n--- RESULTADOS RECTÁNGULO ---");
            console.log(`Área: ${area.toFixed(2)}`);
            console.log(`Perímetro: ${perimetro.toFixed(2)}`);
            mostrarMenu();
        });
    });
}

function pedirDatosTriangulo() {
    rl.question("Ingrese la base del triángulo: ", (inputBase) => {
        let base = parseFloat(inputBase);
        rl.question("Ingrese la altura del triángulo: ", (inputAltura) => {
            let altura = parseFloat(inputAltura);
            rl.question("Ingrese el lado A del triángulo: ", (inputA) => {
                let ladoA = parseFloat(inputA);
                rl.question("Ingrese el lado B del triángulo: ", (inputB) => {
                    let ladoB = parseFloat(inputB);
                    rl.question("Ingrese el lado C del triángulo: ", (inputC) => {
                        let ladoC = parseFloat(inputC);

                        if (isNaN(base) || base <= 0 || isNaN(altura) || altura <= 0 || 
                            isNaN(ladoA) || ladoA <= 0 || isNaN(ladoB) || ladoB <= 0 || isNaN(ladoC) || ladoC <= 0) {
                            console.log("Valores inválidos.");
                            return mostrarMenu();
                        }

                        let area = areaTriangulo(base, altura);
                        let perimetro = perimetroTriangulo(ladoA, ladoB, ladoC);

                        console.log("\n--- RESULTADOS TRIÁNGULO ---");
                        console.log(`Área: ${area.toFixed(2)}`);
                        console.log(`Perímetro: ${perimetro.toFixed(2)}`);
                        mostrarMenu();
                    });
                });
            });
        });
    });
}


mostrarMenu();