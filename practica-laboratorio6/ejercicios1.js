import readline from "node:readline"

const rl=readline.createInterface({
 input: process.stdin,
output: process.stdout,

});

rl.question("Ingresa un numero entero positivo", (numero)=>{
const num =Number(numero);

if(isNaN(num)|| num<0){
console.log("Ingrese un numero positivo")
rl.close();
}else{
let total=1;





for(let i=1; i<=num; i++  ){
total *= i;

}

console.log(`${num}!=${total}`);
rl.close();
}
})

