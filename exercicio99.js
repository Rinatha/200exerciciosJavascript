// Exercício 99: Retorne todas as combinações possíveis de pares (i<j).

function pares(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      res.push([arr[i], arr[j]]);
    }
  }
  return res;
}

// Teste rápido
console.log('Pares:', pares([1, 2, 3, 4]));
