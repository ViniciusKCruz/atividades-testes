const normalizeName = require('./normalizeName'); // Assumindo que a função está em 'normalizeName.js'

describe('Função Normalizar Nome', () => {
  // Caso 1: Nome com letras misturadas (MAIÚSCULAS e minúsculas)
  test('deve capitalizar corretamente um nome misto', () => {
    expect(normalizeName('jUlIaNa')).toBe('Juliana');
  });

  // Caso 2: Nome todo em minúsculas
  test('deve capitalizar corretamente um nome todo em minúsculas', () => {
    expect(normalizeName('pedro')).toBe('Pedro');
  });

  // Caso 3: Nome todo em maiúsculas (e com espaços extras)
  test('deve capitalizar e remover espaços extras de um nome em maiúsculas', () => {
    expect(normalizeName(' ANA PAULA ')).toBe('Ana paula'); // Observe que apenas a primeira letra da string é capitalizada, conforme o requisito.
  });
});