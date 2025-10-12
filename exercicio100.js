// Exercício 100: Divida um array em subarrays com no máximo n elementos (chunk).

function chunk(arr, n) {
  if (n <= 0) return [];
  const res = [];
  for (let i = 0; i < arr.length; i += n) {
    res.push(arr.slice(i, i + n));
  }
  return res;
}

// Teste rápido
console.log('Chunks:', chunk([1,2,3,4,5,6,7], 3));
