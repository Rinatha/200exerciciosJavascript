// Exercício 20: Escreva um programa que imprime uma classificação baseada na nota de um aluno.
let nota = (typeof prompt !== 'undefined') ? Number(prompt("Nota (0-10):")) : 8.5;
let conceito = nota >= 9 ? "A" : nota >= 7 ? "B" : nota >= 5 ? "C" : "D";
console.log("Conceito:", conceito);
