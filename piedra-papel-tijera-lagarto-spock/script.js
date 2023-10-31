let opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
let resultados = {victorias: 0, derrotas: 0, empates: 0};
//arte ASCII
let arteASCII = {
    piedra: `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
`,
    papel: `
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
`,
    tijera: `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
`,
    lagarto: `
     _____
   /     \\
  { () () }
   - ^^^ -
  /  -^-  \\
 /_________\\
`,
    spock: `
     _____
    /_____\\
   (| . . |)
   __\\_-_/__
  /_________\\
`
};
let reglas = {
    piedra: ["tijera", "lagarto"],
    papel: ["piedra", "spock"],
    tijera: ["papel", "lagarto"],
    lagarto: ["papel", "spock"],
    spock: ["piedra", "tijera"]
};
function jugar() {
    let eleccionUsuario = prompt("Elige una opción: piedra, papel, tijera, lagarto o spock").toLowerCase().trim();
    let eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];
    console.log("Elegiste: \n" + arteASCII[eleccionUsuario]);
    console.log("La computadora eligió: \n" + arteASCII[eleccionComputadora]);
    determinarGanador(eleccionUsuario, eleccionComputadora);
}
function determinarGanador(usuario, computadora) {
    if (usuario === computadora) {
        console.log("Es un empate!");
        resultados.empates++;
    } else if (reglas[usuario].includes(computadora)) {
        ganaste(usuario, computadora);
    } else {
        perdiste(usuario, computadora);
    }
}
function ganaste(usuario, computadora) {
    console.log("¡Ganaste! "+ usuario + " gana a " + computadora);
    resultados.victorias++;
}
function perdiste(usuario, computadora) {
    console.log("Perdiste. "+ usuario + " pierde contra " + computadora);
    resultados.derrotas++;
}
let seguirJugando;
do {
    jugar();
    seguirJugando = prompt("¿Quieres seguir jugando? Responde 'si' o 'no'.").toLowerCase().trim();
    if (seguirJugando !== 'si' && seguirJugando !== 'no') {
        alert("Por favor, responde 'si' o 'no'.");
    }
} while (seguirJugando !== 'no');
console.log("Resultados finales:\nVictorias: "+resultados.victorias+"\nDerrotas: "+resultados.derrotas+"\nEmpates: "+resultados.empates);
