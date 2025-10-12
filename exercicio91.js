// Exercício 91: Ordene um array de strings em ordem decrescente pelo comprimento.

const arr = ['Shay', 'Aleyvya', 'Brian', 'Robson', 'Lídia', 'Ceza'];
const ordenado = [...arr].sort((a, b) => b.length - a.length);

// Teste rápido
console.log('Original:', arr);
console.log('Ordenado por tamanho (desc):', ordenado);
