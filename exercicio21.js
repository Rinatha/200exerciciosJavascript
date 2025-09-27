// Exercício 21: Escreva um programa que determina a estação do ano com base no mês.
function estacaoDoAno(mes){ // 1=Jan ... 12=Dez (hemisfério sul ajustado simplificado)
  if([12,1,2].includes(mes)) return "Verão";
  if([3,4,5].includes(mes)) return "Outono";
  if([6,7,8].includes(mes)) return "Inverno";
  return "Primavera";
}
let mes = (typeof prompt !== 'undefined') ? Number(prompt("Mês (1-12):")) : 9;
console.log("Estação:", estacaoDoAno(mes));
