// Exercício 64: Escreva uma função que receba uma string e retorne o número de palavras na string.
function contarPalavras(str){ return str.trim() ? str.trim().split(/\s+/).length : 0; }
console.log(contarPalavras("Shay ama cinema e JavaScript"));
