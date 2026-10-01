import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingresa un numero entero positivo: ", (numero) => {
  const num = Number(numero);

  if (isNaN(num) || num < 1) {
    console.log("Ingrese un numero positivo valido");
    rl.close();
  } else {
    
    let esPrimo = true;

    if (num === 1) {
      esPrimo = false; 
    } else {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          esPrimo = false;
          break; 
        }
      }
    }

    if (esPrimo) {
      console.log(`El numero ${num} es primo.`);
    } else {
      console.log(`El numero ${num} no es primo.`);
    }

    
    const primos = [];

    for (let i = 1; i <= num; i++) {
      let esPrimoActual = true;

      if (i === 1) {
        esPrimoActual = false;
      } else {
        for (let j = 2; j < i; j++) {
          if (i % j === 0) {
            esPrimoActual = false;
            break;
          }
        }
      }

      if (esPrimoActual) {
        primos.push(i);
      }
    }

    console.log(`Números primos desde 1 hasta ${num}: ${primos.join(", ")}`);
    rl.close();
  }
});