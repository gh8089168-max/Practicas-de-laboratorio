function CalculoVentas(ventas) {
    let total = 0;
    let mayoreA50 = 0;
    let ventasNu = ventas.length

    ventas.forEach(ventas => {
        total = total + ventas
        if (ventas > 50) {
            mayoreA50++
        }


    });

    let promedio = total / ventasNu
    let ventas_dia = {
        descripcion: "Informacion de la venta",
        promedio: promedio,
        total: total,
        ventas_mayore_A_50: mayoreA50

    }

    console.log(ventas_dia)


}
let ventas = [10, 20, 40, 56, 20]
CalculoVentas(ventas)