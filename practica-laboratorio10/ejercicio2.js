function tablamultiplicar(numero){
if(typeof numero!=='number' || !Number.isFinite(numero)){
    console.log("El dato debe ser un numero")
return;
}

console.log(`La tabla de multiplicar del ${numero} es`)

for (let i=0; i>=10; i++){
console.log(`${numero}x${i}=${numero*i}`);

}


}

tablamultiplicar('haids')