// Exercício 58: Escreva uma função que retorne a soma de todos os números pares em um array de números.
function somaPares(arr){ return arr.filter(n=>n%2===0).reduce((a,b)=>a+b,0); }
console.log(somaPares([1,2,3,4,5,6,8]));
