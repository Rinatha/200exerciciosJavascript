// Exercício 17: Escreva um programa que determina se um número é par ou ímpar.
let n = (typeof prompt !== 'undefined') ? Number(prompt("Número:")) : 11;
console.log(n % 2 === 0 ? "Par" : "Ímpar");
