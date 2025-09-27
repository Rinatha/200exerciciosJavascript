// Exercício 40: Usando um laço while, crie um programa que inverta uma string.
let s = (typeof prompt !== 'undefined') ? prompt('String:') : 'Shay';
let i = s.length-1, r='';
while(i>=0){ r += s[i]; i--; }
console.log(r);
