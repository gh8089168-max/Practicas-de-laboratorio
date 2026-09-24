const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium): ', (tipoStr) => {
    let tipo = parseInt(tipoStr);
    
    rl.question('Ingrese el monto a retirar: ', (montoStr) => {
        let monto = parseFloat(montoStr);
        let limite;

        
        switch (tipo) {
            case 1:
                limite = 500;
                break;
            case 2:
                limite = 1000;
                break;
            case 3:
                limite = 2000;
                break;
            default:
                console.log('Tarjeta no válida');
                rl.close();
                return;
        }

        
        if (monto <= limite && monto % 10 === 0) {
            console.log('Retiro exitoso');
        } else if (monto > limite) {
            console.log('Límite excedido');
        } else if (monto % 10 !== 0) {
            console.log('El monto debe ser múltiplo de 10');
        }

        rl.close();
    });
});