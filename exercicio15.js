// Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.
function ehPalindromo(p){ p = String(p).toLowerCase(); return p === p.split('').reverse().join(''); }
let palavra = (typeof prompt !== 'undefined') ? prompt("Palavra:") : "Ovo";
console.log(`'${palavra}'`, ehPalindromo(palavra) ? "é palíndromo" : "não é palíndromo");
