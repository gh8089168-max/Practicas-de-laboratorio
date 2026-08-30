let Kwh = 180;
let precioKwh = 0.15;


let CostoBase = (Kwh*precioKwh);
let Impuesto = (CostoBase*0.10);
let CostoTotal = (CostoBase+Impuesto);

console.log(`La cantidad de kilowatts consumidos son : ${Kwh} kWh`);
console.log(`El costo base sin impuestos: $${CostoBase}`);
console.log(`El monto del impuesto (10%) es: $${Impuesto}`);
console.log(`El costo total a paga: $${CostoTotal}`);