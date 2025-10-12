// Exercício 89: Dada uma string com várias palavras separadas por espaços, retorne a palavra mais longa.

const frase = 'programar em javascript melhora a lógica e a paciência';
const palavras = frase.split(/\s+/);
const maisLonga = palavras.reduce((maior, atual) => atual.length > maior.length ? atual : maior, '');

// Teste rápido
console.log('Palavra mais longa:', maisLonga);
