const readline = require("readline")

const fat=readline.createInterface({
input:process.stdin,
output:process.stdout,

});

fat.question("Ingrese su calificacion: ",(calificacion)=>{

if(calificacion >=0  && calificacion<=100){
if(calificacion<=60){
console.log("Felicidades usdted aprobo")

}else{
    console.lof("Lo sentimos pero usted no aprobo")


}

}else{
console.log("Su calificacion tiene que estar en el rango de (0-100)")

}


})