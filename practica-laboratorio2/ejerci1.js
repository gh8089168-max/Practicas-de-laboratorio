import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el precio de la compra: ", function(producto){
rl.question("Ingrese el precio unitario del producto: ", function(precio){

    let totalprecio = parseFloat(producto);
    let precioUni = parseFloat(precio);

let total = totalprecio * precioUni;
console.log(`El total a pagar es: ${total}`);
rl.close();

})

})