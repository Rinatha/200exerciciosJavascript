// Exercício 54: Escreva uma função que ordene um array de números em ordem decrescente.
function ordenarDecrescente(arr){ return [...arr].sort((a,b)=>b-a); }
console.log(ordenarDecrescente([5,1,9,3,7]));
