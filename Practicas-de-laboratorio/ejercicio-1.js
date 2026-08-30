import readline from "node:readline";

const rl=readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.question("Ingrese el total de la compra: ", (compra)=>{

    compra= parseFloat(compra);

    if (compra>=50){
console.log(`Su compra aplica a envío gratis`)

    }

    else {
        console.log(`Nose aplica la compra gratis`)
    }

});

rl.close();