const sum = require('./sum'); // Assumindo que a função está em 'sum.js'

describe('Função de Soma', () => {
  test('deve retornar a soma correta de dois números positivos', () => {
    // 10 + 5 = 15
    expect(sum(10, 5)).toBe(15);
  });
  
  test('deve lidar corretamente com números negativos', () => {
    // -10 + 5 = -5
    expect(sum(-10, 5)).toBe(-5);
  });
});