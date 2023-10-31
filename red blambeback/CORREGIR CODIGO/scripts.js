// Función para calcular el promedio de una lista de números
//function calcularPromedio(numeros) {
//    let suma = 0;
//    for (let i = 0; i <= numeros.length; i++) {
//      suma += numeros[i];
//    }
//    return suma / numeros.lenght;
//  }
//  // Intenta calcular el promedio de [5, 10, 15, 20]
//  const lista = [5, 10, 15, 20];
//  const promedio = calcularPromedio(listas);
//  console.log(promedio); // Corrige los errores en esta función


  // Función para calcular el promedio de una lista de números
function calcularPromedio(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) { 
    suma += numeros[i];
  }
  return suma / numeros.length; 
}
// Intenta calcular el promedio de [5, 10, 15, 20]
const lista = [5, 10, 15, 20];
const promedio = calcularPromedio(lista); 
console.log(promedio);
  