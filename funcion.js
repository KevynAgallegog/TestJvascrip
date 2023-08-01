function sumar(a, b) {
    return a + b;
  }
  
  module.exports = sumar;

  function restar(a, b) {
    return a - b;
  }
  
  module.exports = restar;

  function multiplicar(a, b) {
    return a * b;
  }
  
  module.exports = multiplicar;

  function dividir(a, b) {
    if (b === 0) {
      throw new Error('No se puede dividir entre 0');
    }
    return a / b;
  }
  
  module.exports = dividir;

  function encontrarMaximo(arr) {
    if (arr.length === 0) {
      throw new Error('El array no puede estar vacío');
    }
    return Math.max(...arr);
  }
  
  module.exports = encontrarMaximo;


  function factorial(num) {
    if (num < 0) {
      throw new Error('El número debe ser no negativo');
    }
    if (num === 0 || num === 1) {
      return 1;
    }
    return num * factorial(num - 1);
  }
  module.exports = factorial;


  function esPrimo(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  module.exports = esPrimo;

  function encontrarPromedio(arr) {
    if (arr.length === 0) {
      throw new Error('El array no puede estar vacío');
    }
    const suma = arr.reduce((acc, curr) => acc + curr, 0);
    return suma / arr.length;
  }
  
  module.exports = encontrarPromedio;


  function decimalABinario(decimal) {
    if (decimal < 0) {
      throw new Error('El número debe ser no negativo');
      
    }
    return decimal.toString(2);
}
module.exports = decimalABinario;

function longitudCadena(texto) {
    return texto.length;
  }
  
  module.exports = longitudCadena;