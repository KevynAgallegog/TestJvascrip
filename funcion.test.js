const sumar = require('./sumar');

test('Sumar 2 + 3 es igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('Sumar -2 + 3 es igual a 1', () => {
  expect(sumar(-2, 3)).toBe(1);
});


const restar = require('./restar');

test('Restar 5 - 3 es igual a 2', () => {
  expect(restar(5, 3)).toBe(2);
});

test('Restar -2 - 3 es igual a -5', () => {
  expect(restar(-2, 3)).toBe(-5);
});

const sumar = require('./sumar');

test('Sumar 2 + 3 es igual a 5', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('Sumar -2 + 3 es igual a 1', () => {
  expect(sumar(-2, 3)).toBe(1);
});


const restar = require('./restar');

test('Restar 5 - 3 es igual a 2', () => {
  expect(restar(5, 3)).toBe(2);
});

test('Restar -2 - 3 es igual a -5', () => {
  expect(restar(-2, 3)).toBe(-5);
});


const multiplicar = require('./multiplicar');

test('Multiplicar 2 * 3 es igual a 6', () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test('Multiplicar -2 * 3 es igual a -6', () => {
  expect(multiplicar(-2, 3)).toBe(-6);
});



const dividir = require('./dividir');

test('Dividir 6 / 3 es igual a 2', () => {
  expect(dividir(6, 3)).toBe(2);
});

test('Dividir -6 / 3 es igual a -2', () => {
  expect(dividir(-6, 3)).toBe(-2);
});

test('Dividir entre 0 debería lanzar un error', () => {
  expect(() => dividir(6, 0)).toThrow('No se puede dividir entre 0');
});


const encontrarMaximo = require('./encontrarMaximo');

test('El número más grande de [2, 8, 4, 1] es 8', () => {
  expect(encontrarMaximo([2, 8, 4, 1])).toBe(8);
});

test('El número más grande de [-2, -8, -4, -1] es -1', () => {
  expect(encontrarMaximo([-2, -8, -4, -1])).toBe(-1);
});

test('El array vacío debería lanzar un error', () => {
  expect(() => encontrarMaximo([])).toThrow('El array no puede estar vacío');
});


const factorial = require('./factorial');

test('El factorial de 5 es 120', () => {
  expect(factorial(5)).toBe(120);
});

test('El factorial de 0 es 1', () => {
  expect(factorial(0)).toBe(1);
});

test('Factorial de número negativo debería lanzar un error', () => {
  expect(() => factorial(-5)).toThrow('El número debe ser no negativo');
});

const esPrimo = require('./esPrimo');

test('7 es un número primo', () => {
  expect(esPrimo(7)).toBe(true);
});

test('10 no es un número primo', () => {
  expect(esPrimo(10)).toBe(false);
});

test('0 no es un número primo', () => {
  expect(esPrimo(0)).toBe(false);
});

test('Números negativos no son primos', () => {
  expect(esPrimo(-5)).toBe(false);
});

const encontrarPromedio = require('./encontrarPromedio');

test('El promedio de [2, 4, 6] es 4', () => {
  expect(encontrarPromedio([2, 4, 6])).toBe(4);
});

test('El promedio de [10, 20, 30] es 20', () => {
  expect(encontrarPromedio([10, 20, 30])).toBe(20);
});

test('El array vacío debería lanzar un error', () => {
  expect(() => encontrarPromedio([])).toThrow('El array no puede estar vacío');
});


const decimalABinario = require('./decimalABinario');

test('El número decimal 10 en binario es "1010"', () => {
  expect(decimalABinario(10)).toBe('1010');
});

test('El número decimal 20 en binario es "10100"', () => {
  expect(decimalABinario(20)).toBe('10100');
});

test('El número decimal 0 en binario es "0"', () => {
  expect(decimalABinario(0)).toBe('0');
});

test('Número decimal negativo debería lanzar un error', () => {
  expect(() => decimalABinario(-5)).toThrow('El número debe ser no negativo');
})



const longitudCadena = require('./longitudCadena');

test('La longitud de "Hola" es 4', () => {
  expect(longitudCadena('Hola')).toBe(4);
});

test('La longitud de "JavaScript" es 10', () => {
  expect(longitudCadena('JavaScript')).toBe(10);
});

test('La longitud de una cadena vacía es 0', () => {
  expect(longitudCadena('')).toBe(0);
});