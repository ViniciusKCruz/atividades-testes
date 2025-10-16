const {
  isPrimo,
  celsiusToFahrenheit,
  inverterString,
  fatorial,
  contarVogais,
} = require('./funcoes');

// 1- Testes para a função isPrimo
describe('isPrimo', () => {
  test('deve retornar true para um número primo', () => {
    expect(isPrimo(7)).toBe(true);
  });

  test('deve retornar false para um número não primo', () => {
    expect(isPrimo(10)).toBe(false);
  });

  test('deve retornar false para o número 1', () => {
    expect(isPrimo(1)).toBe(false);
  });
});

// 2- Testes para a função celsiusToFahrenheit
describe('celsiusToFahrenheit', () => {
  test('deve converter 0°C para 32°F', () => {
    expect(celsiusToFahrenheit(0)).toBe(32);
  });

  test('deve converter 100°C para 212°F', () => {
    expect(celsiusToFahrenheit(100)).toBe(212);
  });

  test('deve converter uma temperatura negativa corretamente', () => {
    expect(celsiusToFahrenheit(-40)).toBe(-40);
  });
});

// 3- Testes para a função inverterString
describe('inverterString', () => {
  test('deve inverter a palavra "hello"', () => {
    expect(inverterString('hello')).toBe('olleh');
  });

  test('deve inverter a palavra "Jest"', () => {
    expect(inverterString('Jest')).toBe('tseJ');
  });

  test('deve retornar uma string vazia se a entrada for vazia', () => {
    expect(inverterString('')).toBe('');
  });
});

// 4- Testes para a função fatorial
describe('fatorial', () => {
  test('deve calcular o fatorial de 5', () => {
    expect(fatorial(5)).toBe(120);
  });

  test('deve retornar 1 para o fatorial de 0', () => {
    expect(fatorial(0)).toBe(1);
  });

  test('deve retornar undefined para um número negativo', () => {
    expect(fatorial(-1)).toBeUndefined();
  });
});

// 5- Testes para a função contarVogais
describe('contarVogais', () => {
  test('deve contar as vogais na palavra "JavaScript"', () => {
    expect(contarVogais('JavaScript')).toBe(3);
  });

  test('deve contar as vogais em uma palavra com maiúsculas e minúsculas', () => {
    expect(contarVogais('Ola Mundo')).toBe(4);
  });
});