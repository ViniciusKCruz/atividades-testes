/**
 * Converte o texto para minúsculas e coloca a primeira letra em maiúscula.
 * @param {string} name A string de nome.
 * @returns {string} O nome normalizado.
 */
function normalizeName(name) {
  if (!name || typeof name !== 'string') {
    return '';
  }

  const trimmedName = name.trim();
  if (trimmedName.length === 0) {
    return '';
  }

  // 1. Converte o texto para minúsculas
  const lowerCaseName = trimmedName.toLowerCase();

  // 2. Coloca a primeira letra em maiúscula
  // Pega a primeira letra e transforma em maiúscula + o resto da string minúscula
  return lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
}

module.exports = normalizeName;