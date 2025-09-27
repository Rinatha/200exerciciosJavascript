// Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade.
let idade = (typeof prompt !== 'undefined') ? Number(prompt("Idade:")) : 17;
if(idade >= 16) console.log("Pode votar (de acordo com regras brasileiras: facultativo 16-17, obrigatório 18-69, facultativo 70+).");
else console.log("Não pode votar.");
