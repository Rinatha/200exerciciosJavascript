// Exercício 65: Escreva uma função que aceite um array de números e uma função de callback e retorne a soma de todos os números do array após a aplicação da função de callback.
function somaComCallback(arr, cb){ return arr.map(cb).reduce((a,b)=>a+b,0); }
console.log(somaComCallback([1,2,3,4], x=>x*2));
