// Exercício 9: Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.
function classificaNumero(n){
  if(n > 0) return "Positivo";
  if(n < 0) return "Negativo";
  return "Zero";
}
let valor = (typeof prompt !== 'undefined') ? Number(prompt("Digite um número:")) : -3;
console.log(classificaNumero(valor));
