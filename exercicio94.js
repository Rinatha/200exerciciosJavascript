// Exercício 94: Dado um array de strings e um número n, retorne apenas strings com mais de n caracteres.

function maioresQueN(strings, n) {
  return strings.filter(s => s.length > n);
}

// Teste rápido
const palavras = ['gato', 'ciberpunk', 'luz', 'resiliente', 'paz'];
console.log('>4 caracteres:', maioresQueN(palavras, 4));
