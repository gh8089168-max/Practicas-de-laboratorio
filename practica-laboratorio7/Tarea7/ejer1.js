const readlineSync = require('readline-sync');

const secreto = Math.floor(Math.random()*50 )+1;

let numerointentos=0;
let adivino=false;


console.log("He seleccioando un jugeo en el cual debes adivinar un numero de entre 1 al 50");

while(!adivino ){

let numero=parseFloat(readlineSync.question("ingrese un numero: "));
 if(isNaN(numero) || numero<1 || numero>50){
console.log("Porfavor ingrese un numero que se encuentre en el rango 1 al 50.\n")
continue;


 }
 numerointentos++;

 if(numero === secreto){
 adivino=true;
 console.log(`\n ¡Felicidades! Adivinaste el número secreto (${secreto})en ${numerointentos} intentos.`);
    } else if (numero < secreto) {
        console.log("📈 El número secreto es MAYOR.\n");
    } else {
        console.log("📉 El número secreto es MENOR.\n");
    }





 }

