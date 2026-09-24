const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el primer número (a): ', (aStr) => {
    let a = parseFloat(aStr);
    
    rl.question('Ingrese el segundo número (b): ', (bStr) => {
        let b = parseFloat(bStr);
        
        rl.question('Ingrese el tercer número (c): ', (cStr) => {
            let c = parseFloat(cStr);

            
            if (a === b && b === c) {
                console.log('Los tres números son iguales');
            } else if (a !== b && b !== c && a !== c) {
                console.log('Los tres números son diferentes');
            } else {
                console.log('Hay dos números iguales');
            }

            
            let mayor = Math.max(a, b, c);
            let menor = Math.min(a, b, c);
            console.log('El número mayor es: ' + mayor);
            console.log('El número menor es: ' + menor);

            
            if (a < 0 || b < 0 || c < 0) {
                console.log('Hay números negativos');
            }

            rl.close();
        });
    });
});