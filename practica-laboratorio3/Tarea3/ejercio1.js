import readline from "node:readline";

const rl=readline.createInterface({
input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa un numero: ", (numero)=>{

    if(numero>0 && numero<=100){
        console.log(`Su numero es positivo`)
    }else if(numero<0){
        console.log(`Su numero es negativo`)
    } else{
        console.log(`Su numero e cero`)
    }
rl.close();


})