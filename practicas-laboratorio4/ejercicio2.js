const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingrese el primer número: ', (num1) => {
   
    rl.question('Ingrese el segundo número: ', (num2) => {
        
        rl.question('Ingrese el operador (+, -, *, /): ', (operador) => {
           
            let numero1 = parseFloat(num1);
            let numero2 = parseFloat(num2);
            let resultado; 
            
           
            switch (operador) {
                case '+': 
                    resultado = numero1 + numero2;
                    console.log(numero1 + ' + ' + numero2 + ' = ' + resultado);
                    break;
                case '-': 
                    resultado = numero1 - numero2;
                    console.log(numero1 + ' - ' + numero2 + ' = ' + resultado);
                    break;
                case '*':
                    resultado = numero1 * numero2;
                    console.log(numero1 + ' * ' + numero2 + ' = ' + resultado);
                    break;
                case '/': 
                    if (numero2 === 0) {
                        console.log('Error: No se puede dividir entre cero');
                    } else {
                        resultado = numero1 / numero2;
                        console.log(numero1 + ' / ' + numero2 + ' = ' + resultado);
                    }
                    break;
                default: 
                    console.log('Error: Operador no válido');
            }
            
            
            rl.close();
        });
    });
});