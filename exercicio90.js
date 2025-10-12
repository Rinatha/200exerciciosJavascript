// Exercício 90: Remova duplicatas de um array e retorne apenas elementos únicos.

function unicos(arr) {
  return [...new Set(arr)];
}

// Teste rápido
const nums = [1, 2, 2, 3, 4, 4, 5];
console.log('Únicos:', unicos(nums));
