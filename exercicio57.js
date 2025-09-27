// Exercício 57: Escreva uma função que retorne a soma de todos os números ímpares em um array de números.
function somaImpares(arr){ return arr.filter(n=>n%2!==0).reduce((a,b)=>a+b,0); }
console.log(somaImpares([1,2,3,4,5,7]));
