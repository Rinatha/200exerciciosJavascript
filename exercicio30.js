// Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100.
function ehPrimo(n){ if(n<2) return false; for(let d=2; d<=Math.sqrt(n); d++){ if(n%d===0) return false; } return true; }
for(let n=2;n<=100;n++){ if(ehPrimo(n)) console.log(n); }
