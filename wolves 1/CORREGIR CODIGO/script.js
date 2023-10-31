// Calculadora de promedio(codigo sin corregir)
//let nota1 = parseFloat(prompt("Ingrese la nota del primer parcial: "));
//let nota2 = parseFloat(prompt("Ingrese la nota del segundo parcial: "));
//let nota3 = parseFloat(prompt("Ingrese la nota del tercer parcial: "));

//let promedio = nota1 + nota2 + nota3 / 3;

//console.log("El promedio es: " + promedios.toFixed(2));

//calculadora de promedio 
let nota1 = parseFloat(prompt("Ingrese la nota del primer parcial: "));
let nota2 = parseFloat(prompt("Ingrese la nota del segundo parcial: "));
let nota3 = parseFloat(prompt("Ingrese la nota del tercer parcial: "));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    console.log("Por favor, ingrese números válidos para las notas.");
} else {
    let promedio = (nota1 + nota2 + nota3) / 3;
    console.log("El promedio es: " + promedio.toFixed(2));
}