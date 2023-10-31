
function suma(numeros) {
    return numeros.reduce((a, b) => a + b, 0);
  }
  function resta(numeros) {
    return numeros.reduce((a, b) => a - b);
  }
  
  function multiplicacion(a, b) {
    return a * b;
  }
  function division(a, b) {
    if (b === 0) {
      return 'Error: División por cero';
    } else {
      return a / b;
    }
  }
  function calculadora() {
    let operacion = prompt('Ingrese la operación que desea realizar: suma, resta, multiplicación, división');
    
    let numeros = [];
    if (operacion === 'suma' || operacion === 'resta') {
      let numero = prompt('Ingrese un número o "fin" para terminar');
      while (numero !== 'fin') {
        numeros.push(Number(numero));
        numero = prompt('Ingrese otro número o "fin" para terminar');
      }
    } else if (operacion === 'multiplicación' || operacion === 'división') {
      numeros.push(Number(prompt('Ingrese el primer número')));
      numeros.push(Number(prompt('Ingrese el segundo número')));
    } else {
      console.log('Operación no válida');
      return;
    }
  
    let resultado;
    switch (operacion) {
      case 'suma':
        resultado = suma(numeros);
        break;
      case 'resta':
        resultado = resta(numeros);
        break;
      case 'multiplicación':
        resultado = multiplicacion(numeros[0], numeros[1]);
        break;
      case 'división':
        resultado = division(numeros[0], numeros[1]);
        break;
      default:
        console.log('Operación no válida');
        return;
    }
  
    console.log(`El resultado es: ${resultado}`);
    
    let otraOperacion = prompt('¿Desea realizar otra operación? (sí/no)');
    if (otraOperacion.toLowerCase() === 'sí') {
      calculadora();
    }
  }
  calculadora();