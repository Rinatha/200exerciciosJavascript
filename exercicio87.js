// Exercício 87: Dado dois arrays (pares e ímpares), combine-os e filtre múltiplos de 5.

const pares = [2, 4, 6, 10, 20];
const impares = [1, 3, 5, 15, 21];
const combinados = [...pares, ...impares];
const multiplosDe5 = combinados.filter(n => n % 5 === 0);

// Teste rápido
console.log('Combinados:', combinados);
console.log('Múltiplos de 5:', multiplosDe5);
