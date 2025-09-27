// Exercício 53: Escreva uma função que verifique se um número é primo.
function ehPrimo(n){ if(n<2) return false; for(let d=2; d<=Math.sqrt(n); d++){ if(n%d===0) return false; } return true; }
console.log(ehPrimo(29));
