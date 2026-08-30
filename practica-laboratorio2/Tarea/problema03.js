import readline from "node:readline";

const rl=readline.createInterface({
input: process.stdin,
output: process.stdout,
});

rl.question("Ingrese su año de nacimiento: ", function(fechaNac){

    let fecha = new Date();
    let Fechaactual= fecha.getFullYear();
    let Edad= (Fechaactual-parseFloat(fechaNac));

console.log(`Tu edad aproximada es: ${Edad} años."`)
rl.close();
});