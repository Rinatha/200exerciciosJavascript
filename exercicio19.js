// Exercício 19: Escreva um programa que verifica se um número está dentro de um determinado intervalo.
let numero = (typeof prompt !== 'undefined') ? Number(prompt("Número:")) : 15;
let min = 10, max = 20;
console.log(numero >= min && numero <= max ? "Dentro do intervalo" : "Fora do intervalo");
