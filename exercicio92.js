// Exercício 92: Dado um array de objetos, retorne um novo array contendo apenas os valores de uma propriedade específica.

function pluck(arr, prop) {
  return arr.map(obj => obj[prop]);
}

// Teste rápido
const pessoas = [
  { nome: 'Shay', idade: 39 },
  { nome: 'Brian', idade: 40 },
  { nome: 'Lídia', idade: 38 }
];
console.log('Nomes:', pluck(pessoas, 'nome'));
console.log('Idades:', pluck(pessoas, 'idade'));
