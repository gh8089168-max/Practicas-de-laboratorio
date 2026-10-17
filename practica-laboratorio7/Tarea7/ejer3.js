const readlineSync=require('readline-sync');

const inventario = [
    { nombre: "Laptop Gamer", precio: 950.00, cantidad: 4 },
    { nombre: "Mouse Inalámbrico", precio: 25.50, cantidad: 25 },
    { nombre: "Teclado Mecánico", precio: 65.00, cantidad: 12 },
    { nombre: "Monitor 24 pulgadas", precio: 180.00, cantidad: 7 }
];

let cantidadTotalUnidades = 0;
let valorGlobalInventario = 0;

console.log("--- DETALLE DE PRODUCTOS E INVENTARIO ---");


for (let producto of inventario) {
    let valorTotalProducto = producto.precio * producto.cantidad;
    
    console.log(`- Producto: ${producto.nombre}`);
    console.log(`  Precio unitario: $${producto.precio} | Cantidad: ${producto.cantidad}`);
    console.log(`  Valor Total: $${valorTotalProducto.toFixed(2)}\n`);

    
    cantidadTotalUnidades += producto.cantidad;
    valorGlobalInventario += valorTotalProducto;
}


const resumenInventario = {
    totalDeProductos: cantidadTotalUnidades,
    valorTotalInventario: `$${valorGlobalInventario.toFixed(2)}`
};

console.log("--- RESUMEN GENERAL DEL INVENTARIO ---");


for (let propiedad in resumenInventario) {
    console.log(`${propiedad}: ${resumenInventario[propiedad]}`);
}