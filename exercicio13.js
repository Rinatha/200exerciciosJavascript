// Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.
let peso = (typeof prompt !== 'undefined') ? Number(prompt("Peso (kg):")) : 65;
let altura = (typeof prompt !== 'undefined') ? Number(prompt("Altura (m):")) : 1.68;
let imc = peso / (altura*altura);
let msg = imc < 18.5 ? "Abaixo do peso" : imc < 25 ? "Peso normal" : imc < 30 ? "Sobrepeso" : "Obesidade";
console.log("IMC:", imc.toFixed(2), "-", msg);
