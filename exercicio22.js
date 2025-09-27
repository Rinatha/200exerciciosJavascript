// Exercício 22: Escreva um programa que determina o número de dias em um mês.
function diasNoMes(mes, ano){ return new Date(ano, mes, 0).getDate(); }
let mes = (typeof prompt !== 'undefined') ? Number(prompt("Mês (1-12):")) : 2;
let ano = (typeof prompt !== 'undefined') ? Number(prompt("Ano:")) : 2024;
console.log("Dias no mês:", diasNoMes(mes, ano));
