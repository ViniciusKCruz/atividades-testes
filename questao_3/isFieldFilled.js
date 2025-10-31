/**
 * Verifica se um campo de formulário foi preenchido.
 * Considera vazio campos com apenas espaços em branco.
 * @param {string} value O valor do campo.
 * @returns {boolean} true se o campo não estiver vazio, false caso contrário.
 */
function isFieldFilled(value) {
  // Se for null ou undefined, retorna false imediatamente
  if (value === null || value === undefined) {
    return false;
  }
  
  // Converte para string e remove espaços em branco do início/fim.
  // Depois, verifica se o comprimento é maior que 0.
  return String(value).trim().length > 0;
}

module.exports = isFieldFilled;