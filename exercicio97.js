// Exercício 97: Encontre o elemento que aparece mais vezes em um array.

function maisFrequente(arr) {
  const freq = new Map();
  let melhor = null;
  let max = 0;
  for (const el of arr) {
    const c = (freq.get(el) || 0) + 1;
    freq.set(el, c);
    if (c > max) {
      max = c;
      melhor = el;
    }
  }
  return melhor;
}

// Teste rápido
console.log('Mais frequente:', maisFrequente([1,2,2,3,3,3,4,2,3]));
