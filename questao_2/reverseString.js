/**
 * Recebe uma string e a retorna invertida.
 * @param {string} str A string a ser invertida.
 * @returns {string} A string invertida.
 */
function reverseString(str) {
  return str.split('').reverse().join('');
}

module.exports = reverseString;