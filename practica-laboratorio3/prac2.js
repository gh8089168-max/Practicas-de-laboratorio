const readline = require("readline")

const fat=readline.createInterface({
input:process.stdin,
output:process.stdout,

});

fat.question("Ingrese su primer numero: ",(numero1)=>{
fat.question("Ingrese su segundo numero: ",(numero2)=>{


if(numero1>numero2){
console.log("Su numero mayor es:", numero1);
}else if(numero2>numero1){
console.log("Su numero mayor es:", numero2);
}else{
console.log("sus numeros son iguales",numero1,"=",numero2)

}
fat.close();


})

})