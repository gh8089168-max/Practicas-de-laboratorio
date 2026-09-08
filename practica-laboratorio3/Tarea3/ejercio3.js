import readline from "node:readline";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("Ingresa el monto de la venta realizada: ", (venta)=>{

let ventaTotal = parseFloat(venta)

let descuento=0;

if(ventaTotal>100){
descuento=ventaTotal*0.15;


}else if(ventaTotal>50){
descuento=ventaTotal*0.10;


}else{

    descuento=0
}

let MontoFinal=ventaTotal-descuento;

console.log(`El precio orignal es de: $${ventaTotal.toFixed(2)}`);
console.log(`El descuento a plicar es de: ${descuento.toFixed(2)}`);
console.log(`El monto final a pagar es de: $${MontoFinal.toFixed(2)}`);


rl.close();
})