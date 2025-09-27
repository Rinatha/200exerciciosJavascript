// Exercício 14: Escreva um programa que verifica se um ano é bissexto.
let ano = (typeof prompt !== 'undefined') ? Number(prompt("Ano:")) : 2024;
let bissexto = (ano%400===0) || (ano%4===0 && ano%100!==0);
console.log(ano, bissexto ? "é bissexto" : "não é bissexto");
