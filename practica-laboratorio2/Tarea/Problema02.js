import readline from "node:readline";

const rl=readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.question("Ingrese el nombre del producto: ", function(producto){
rl.question("Ingrese el precio Unitario del producto: ", function(PrecUni){
rl.question("Ingrese la cantida comprada: ", function(Cantida){

let PreciUnitario= parseFloat(PrecUni);
let LaCantidad= parseFloat(Cantida);
let Total= (PreciUnitario*LaCantidad);

let nombreMayuscula= producto.toUpperCase();
let letra=producto.slice(0,3);


console.log(`${nombreMayuscula}`);
console.log(`${letra}`);
console.log(`${Total.toFixed(2)}`);
rl.close();

});

});
});