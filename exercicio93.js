// Exercício 93: Dado um array de números, encontre a mediana.

function mediana(nums) {
  if (!Array.isArray(nums) || nums.length === 0) return null;
  const ordenado = [...nums].sort((a, b) => a - b);
  const meio = Math.floor(ordenado.length / 2);
  if (ordenado.length % 2 === 1) {
    return ordenado[meio];
  } else {
    return (ordenado[meio - 1] + ordenado[meio]) / 2;
  }
}

// Teste rápido
console.log('Mediana [1,3,3,6,7,8,9]:', mediana([1,3,3,6,7,8,9]));
console.log('Mediana [1,2,3,4]:', mediana([1,2,3,4]));
