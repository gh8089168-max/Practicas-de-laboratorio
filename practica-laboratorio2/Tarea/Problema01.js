import readline from "node:readline";

const rl=readline.createInterface({
input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese el nombre completo : ", function(nombre){

let NombreMayu= nombre.toUpperCase();
let letra= nombre.slice(0,4);
let NombreMinus= nombre.toLowerCase();

console.log(`${NombreMayu}`);
console.log(`${letra}`);
console.log(`${NombreMinus}`);
rl.close();

});

