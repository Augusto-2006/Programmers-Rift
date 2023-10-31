//Crea un programa en JavaScript que evalúe el nivel de gastos mensuales de una persona 
//y le proporcione una evaluación basada en ese gasto. 
//El programa debe solicitar al usuario que ingrese su gasto total mensual 
//y luego proporcionar una evaluación según estas condiciones: 

//Crea un programa que solicite al usuario que ingrese su gasto total mensual. 

//Utiliza una serie de condicionales para determinar la evaluación basada en el gasto total. 
//Puedes establecer tus propios umbrales y categorías para las evaluaciones. Por ejemplo: 

//Si el gasto total es inferior a $500, la evaluación podría ser "Gasto Muy Bajo". 

//Si el gasto total está entre $500 y $1000, la evaluación podría ser "Gasto Moderado". 

//Si el gasto total es superior a $1000, la evaluación podría ser "Gasto Alto". 

//Muestra la evaluación en la consola del navegador de acuerdo con el gasto total ingresado por el usuario. 

//Implementa un mensaje de agradecimiento al usuario por utilizar la calculadora de evaluación de gastos. 



let gastoMensual = prompt("Por favor, ingresa tu gasto total mensual:");
gastoMensual = Number(gastoMensual);
let evaluacion;
if (gastoMensual < 500) {
    evaluacion = "Gasto Muy Bajo";
} else if (gastoMensual >= 500 && gastoMensual <= 1000) {
    evaluacion = "Gasto Moderado";
} else if (gastoMensual > 1000) {
    evaluacion = "Gasto Alto";
}
console.log("Tu nivel de gastos es: " + evaluacion);
console.log("Gracias por utilizar la calculadora de evaluación de gastos.");