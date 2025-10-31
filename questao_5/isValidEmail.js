/**
 * Valida se um e-mail é válido, verificando o formato básico.
 * @param {string} email O endereço de e-mail a ser validado.
 * @returns {boolean} true se o e-mail for válido, false caso contrário.
 */
function isValidEmail(email) {
  if (typeof email !== 'string') return false;

  // Regex para formato: texto@dominio.extensão
  // O padrão verifica:
  // ^ - Início da string
  // [^\s@]+ - Pelo menos um caractere que não seja espaço ou '@' (a parte do usuário)
  // @ - O caractere arroba
  // [^\s@]+ - Pelo menos um caractere que não seja espaço ou '@' (o domínio)
  // \. - Um ponto (escapado)
  // [^\s@]{2,} - Pelo menos dois caracteres que não sejam espaço ou '@' (a extensão, ex: com, net, br)
  // $ - Fim da string
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  // Critério: Não começar ou terminar com caracteres inválidos (o regex acima já cuida disso,
  // pois a expressão começa com ^ e termina com $, garantindo que não haja espaços)

  return emailRegex.test(email);
}

module.exports = isValidEmail;