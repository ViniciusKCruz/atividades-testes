// 1- Função que verifica se um número é primo
function isPrimo(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i = i + 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// 2- Função que converta Celsius em Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// 3- Função que inverte uma string
function inverterString(str) {
  return str.split('').reverse().join('');
}

// 4- Função que calcula o fatorial
function fatorial(num) {
  if (num < 0) return undefined; // Fatorial não é definido para negativos
  if (num === 0) return 1;

  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

// 5- Função que conte quantas vogais existem em uma palavra
function contarVogais(str) {
  const vogais = 'aeiouAEIOU';
  let contador = 0;
  for (let char of str) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  return contador;
}

module.exports = {
  isPrimo,
  celsiusToFahrenheit,
  inverterString,
  fatorial,
  contarVogais,
};