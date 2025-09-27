// Exercício 39: Usando um laço for, crie um programa que calcule o fatorial de um número.
let n = (typeof prompt !== 'undefined') ? Number(prompt('Número:')) : 5;
let fat = 1;
for(let i=1;i<=n;i++) fat*=i;
console.log(`Fatorial de ${n} =`, fat);
