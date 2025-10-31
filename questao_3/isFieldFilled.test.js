const isFieldFilled = require('./isFieldFilled');

describe('Validação de Campo Preenchido', () => {
  // Caso 1: Campo preenchido corretamente.
  test('deve retornar true para um campo preenchido', () => {
    expect(isFieldFilled('Conteúdo')).toBe(true);
  });

  // Caso 2: Campo vazio.
  test('deve retornar false para uma string vazia', () => {
    expect(isFieldFilled('')).toBe(false);
  });

  // Caso 3: Campo com espaços em branco.
  test('deve retornar false para um campo com apenas espaços em branco', () => {
    expect(isFieldFilled('   ')).toBe(false);
  });
  
  // Caso 4: Testando null e undefined
  test('deve retornar false para null ou undefined', () => {
    expect(isFieldFilled(null)).toBe(false);
    expect(isFieldFilled(undefined)).toBe(false);
  });

  // Caso Extra: Outros valores
  test('deve retornar true para números válidos', () => {
    expect(isFieldFilled(0)).toBe(true); // "0" tem comprimento 1
    expect(isFieldFilled(42)).toBe(true);
  });
});