// Exercício 12: Escreva um programa que verifica a situação de um estudante de acordo com sua média final.
let mediaFinal = (typeof prompt !== 'undefined') ? Number(prompt("Média final:")) : 6.3;
let situacao = mediaFinal >= 7 ? "Aprovado" : (mediaFinal >= 5 ? "Recuperação" : "Reprovado");
console.log("Situação:", situacao);
