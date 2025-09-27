// Exercício 43: Usando um laço while, crie um programa que determine se um número é palíndromo ou não (um número é palíndromo se for igual ao seu reverso).
let num = (typeof prompt !== 'undefined') ? prompt('Número:') : '12321';
let i=num.length-1, rev='';
while(i>=0){ rev += num[i]; i--; }
console.log(num === rev ? "Palíndromo" : "Não é palíndromo");
