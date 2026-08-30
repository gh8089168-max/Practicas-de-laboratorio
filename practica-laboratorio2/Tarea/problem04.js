let fecha= new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth()+1;
let anio = fecha.getFullYear();

let Hora = fecha.getHours();
let minutos= fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log(`Hoy es ${dia}/${mes}/${anio} y son las ${Hora}:${minutos}:${segundos}`);