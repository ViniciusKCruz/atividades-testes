const reverseString = require('./reverseString'); // Assumindo que a função está em 'reverseString.js'

describe('Função Inverter String', () => {
  // Caso 1: Palavra simples
  test('deve inverter uma palavra corretamente', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  // Caso 2: Frase com espaços
  test('deve inverter uma frase, incluindo espaços', () => {
    expect(reverseString('full stack')).toBe('kcats lluf');
  });

  // Caso 3: String vazia
  test('deve retornar uma string vazia se a entrada for vazia', () => {
    expect(reverseString('')).toBe('');
  });
});