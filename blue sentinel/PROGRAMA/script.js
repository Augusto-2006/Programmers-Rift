//Crear un programa en JavaScript que permita guardar personajes de una serie o juego en memoria utilizando arrays. 
//Crea un array vacío llamado personajes al comienzo del programa. 
//Muestra un mensaje de bienvenida en la consola para explicar el propósito del programa. 
//Proporciona al usuario un menú de opciones para cargar y mostrar los datos cargados: 
//1 para cargar datos. 
//2 para mostrar datos. 
//3 para salir del programa. 
//Si el usuario selecciona la opción 1, solicita al usuario que ingrese un personaje y agrega ese dato al array personajes. 
//Si el usuario selecciona la opción 2, muestra los datos almacenados en el array personajes en la consola. 
// Si el usuario selecciona la opción 3, muestra un mensaje de despedida y finaliza el programa. 
// Después de realizar cualquiera de las opciones 1 o 2, vuelve al menú principal para permitir que el usuario realice más acciones si lo desea. 
//Asegúrate de validar la entrada del usuario para garantizar que solo se ingresen opciones válidas (1, 2 o 3). Si se ingresa una opción no válida, muestra un mensaje de error y vuelve al menú principal. 
//Opcional: guardar y cargar datos desde localStorage 
// Crear un array vacío llamado personajes al comienzo del programa.

let personajes = [];
console.log("Bienvenido al programa. Aquí puedes guardar y ver personajes de una serie o juego.")
function menu() {
  let opcion = prompt("Por favor, selecciona una opción:\n1 para cargar datos.\n2 para mostrar datos.\n3 para salir del programa.");
  if (opcion === '1') {
    let personaje = prompt("Por favor, ingresa el nombre del personaje:");
    personajes.push(personaje);
    console.log(`Personaje ${personaje} agregado.`);
    menu();
  }
  else if (opcion === '2') {
    console.log("Personajes guardados:");
    for(let i = 0; i < personajes.length; i++) {
      console.log(personajes[i]);
    }
    menu();
  }
  else if (opcion === '3') {
    console.log("Gracias por usar el programa. ¡Hasta luego!");
  }
  else {
    console.log("Opción no válida. Por favor, ingresa 1, 2 o 3.");
    menu();
  }
}
menu();