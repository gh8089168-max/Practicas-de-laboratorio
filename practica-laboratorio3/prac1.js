const readline = require("readline")

const fat=readline.createInterface({
input:process.stdin,
output:process.stdout,

});

fat.question("Ingrese un numero: ", (numero)=>{

    if(numero>=1){
        console.log("Su nummero es positivo")
    }

    else if(numero<=-1){
console.log("Su numero es negativo");
    }
else{
console.log("Su numero es 0");

}

fat.close();

});




