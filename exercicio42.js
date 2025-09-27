// Exercício 42: Usando um laço for, crie um programa que transforme um número binário em decimal.
let bin = (typeof prompt !== 'undefined') ? prompt('Binário:') : '1101';
let dec = 0, pot = 0;
for(let i=bin.length-1;i>=0;i--){ dec += Number(bin[i]) * (2**pot); pot++; }
console.log(dec);
