const readlineSync = require('readline-sync');

let saldo = 1000;
let salir = false;
let saldofinal=0;
do {
    //Menu
    console.log(`\n--MENU PRINCIPAL--`);
    console.log(`1.Consultar saldo`);
    console.log(`2.Retirar`)
    console.log(`3.Depositar`)
    console.log(`4.salir`)

    let numero = parseInt(readlineSync.question("Ingrese una opcion del menu: "));

    switch (numero) {

        case 1:
            console.log(`Tu saldo actual es de $${saldo}`);
            saldofinal++;
            break;
        case 2:
            let cantidad = parseFloat(readlineSync.question(`Ingrese la cantidad a retirar: `))

            if (cantidad <= saldo) {
                saldo = saldo - cantidad;
                console.log("Cantidad retirada exitosamente")

            } else {
                console.log("La cantidad es mayor al saldo en tarjeta ")
            }
            saldofinal++;
            break;

        case 3:
            let deposito = parseInt(readlineSync.question(`Ingrese la cantidad del deposito: `));
            saldo= saldo + deposito
            saldofinal++;
            break;
        case 4:
            console.log("Saliendo del sistema...");
            salir = true;
            break;

        default:
            console.log('Opcion no valida. Intente de nuevo.');
    }
} while (!salir);








