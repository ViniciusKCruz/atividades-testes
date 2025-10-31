const isValidEmail = require('./isValidEmail');

describe('Validação de E-mail', () => {
  // Caso 1: Um e-mail válido.
  test('deve retornar true para um e-mail com formato válido', () => {
    expect(isValidEmail('usuario.teste@dominio.com.br')).toBe(true);
  });

  // Caso 2: Um e-mail sem "@".
  test('deve retornar false para um e-mail sem o caractere arroba (@)', () => {
    expect(isValidEmail('usuariodominio.com')).toBe(false);
  });

  // Caso 3: Um e-mail com domínio incorreto (sem a extensão após o ponto).
  test('deve retornar false para um e-mail sem a extensão (ex: .com)', () => {
    expect(isValidEmail('teste@dominio.')).toBe(false);
  });

  // Caso Extra: Caractere inválido no início (que o regex não permite, mas é um bom teste)
  test('deve retornar false para um e-mail com espaço no início', () => {
    expect(isValidEmail(' meu@email.com')).toBe(false);
  });
});