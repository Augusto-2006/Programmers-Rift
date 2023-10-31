//Desarrollar un pequeño programa que solicite al usuario el nombre y la edad,
//devolver por consola y por ventana el siguiente mensaje con los datos correspondientes. 
//"Hola nombreIngresado, naciste en el año, añoIngresado" 
let nombre = prompt("ingrese su noombre")
let edad = prompt("Ingrese su edad")
let añoActual = new Date().getFullYear();
let añoIngresado = añoActual - edad;
let mensaje = "Hola " + nombre + ", naciste en el año " + añoIngresado
console.log(mensaje);
alert(mensaje);