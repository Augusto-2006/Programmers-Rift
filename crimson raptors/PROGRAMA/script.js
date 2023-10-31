//Crea un programa en JavaScript que solicite al usuario un número y luego utilice un bucle para 
//sumar todos los números desde 1 hasta el número ingresado. 
//El programa debe mostrar la suma total en la consola. 
//Pide al usuario que ingrese un número entero positivo. Solo podrá ingresar este tipo de dato. 
//Suma todos los números desde 1 hasta el número ingresado. 
//Muestra la suma total en la consola del navegador. 
//Asegúrate de manejar situaciones en las que el usuario pueda ingresar un valor no válido, 
//como una cadena de texto o un número negativo. En tales casos, muestra un mensaje de error en la consola.  

let numero = prompt("Por favor, ingrese un número entero positivo:");
numero = parseInt(numero);
if (Number.isInteger(numero) && numero > 0) {
  let suma = 0;
  for (let i = 1; i <= numero; i++) {
    suma += i;
  }
  console.log("La suma de los números desde 1 hasta " + numero + " es: " + suma);
} else {
  console.error("Por favor, ingrese un número entero positivo válido.");
}