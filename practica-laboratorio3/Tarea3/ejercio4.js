import readline from "node:readline";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question("Ingrese el nombre: ", (nombre)=>{
rl.question("Ingrese la edad: ", (edad)=>{
rl.question("ingrese su años de experiencia: ", (años)=>{

if(edad>=18 && años>0){
console.log(`Candidato válido`);

}else{
    console.log(`No cumple con los requisitos`)
}
rl.close();

})

})

})