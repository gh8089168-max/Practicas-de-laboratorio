const readline = require("readline")

const fat=readline.createInterface({
input:process.stdin,
output:process.stdout,

});

fat.question("Ingrese su edad: ", (edad)=>{

if(edad>=0 && edad<=12){
    console.log("Eres niño")
}else if(edad>=13 && edad<=17){
    console.log("Eres adolecente")
}else if(edad>=18 && edad<=64){
    console.log("Eres adulto")
}else{
    console.log("Eres adulto mayor")
}

fat.close();
});