// Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.
let a=0,b=1;
for(let i=0;i<10;i++){ console.log(a); [a,b]=[b,a+b]; }
