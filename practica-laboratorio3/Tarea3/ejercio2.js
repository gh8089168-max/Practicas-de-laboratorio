import readline from "node:readline";

const rl=readline.createInterface({
input: process.stdin,
output: process.stdout,
 
});

rl.question("ingrese la primera nota(0-100): ",(numero1)=>{
rl.question("Ingrese la segunda nota(0-100) : ", (numero2)=>{


 if(numero1==numero2){
console.log(`Son iguales`)

}else if(numero1>numero2){
console.log(`La nota mayor es: ${numero1}`)

}else if(numero2>numero1){
console.log(`La nota mayor es: ${numero2}`)

}

rl.close();

})

});