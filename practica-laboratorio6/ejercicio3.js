import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuántas calificaciones desea ingresar?: ", (inputCantidad) => {
  const cantidad = parseInt(inputCantidad);

 
  if (isNaN(cantidad) || cantidad <= 0) {
    console.log("Por favor, ingrese un número entero positivo válido.");
    rl.close();
    return;
  }

  let suma = 0;
  let masAlta = -Infinity; 
  let masBaja = Infinity;  
  let contador = 1;

  
  function pedirNota() {
    if (contador <= cantidad) {
      rl.question(`Ingrese la calificación ${contador}: `, (inputNota) => {
        const nota = parseFloat(inputNota);

       
        if (isNaN(nota) || nota < 0) {
          console.log("Nota no válida. Por favor, ingrese un número positivo.");
          pedirNota(); 
        } else {
         
          suma = suma + nota;

          
          if (nota > masAlta) masAlta = nota;
          if (nota < masBaja) masBaja = nota;

          contador++;
          pedirNota(); 
        }
      });
    } else {
      
      const promedio = suma / cantidad;

      console.log("\n--- RESULTADOS ---");
      console.log(`El promedio final es: ${promedio.toFixed(2)}`);
      console.log(`La calificación más alta es: ${masAlta}`);
      console.log(`La calificación más baja es: ${masBaja}`);

      rl.close();
    }
  }

  
  pedirNota();
});