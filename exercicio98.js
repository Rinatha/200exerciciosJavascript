// Exercício 98: Remova palavras proibidas de um array de strings.

function filtraProibidas(arr, proibidas) {
  const set = new Set(proibidas.map(p => p.toLowerCase()));
  return arr.filter(p => !set.has(p.toLowerCase()));
}

// Teste rápido
const frases = ['luz', 'caos', 'esperança', 'medo', 'Luz'];
const proibidas = ['medo', 'caos'];
console.log('Filtrado:', filtraProibidas(frases, proibidas));
