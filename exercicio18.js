// Exercício 18: Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.
let idade = (typeof prompt !== 'undefined') ? Number(prompt("Idade:")) : 18;
console.log(idade >= 18 ? "Pode dirigir" : "Não pode dirigir");
