// Exercício 36: Usando um laço for, imprima todos os números perfeitos de 1 a 100 (um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número).
function somaDivisores(n){
  let s=1;
  for(let d=2; d<=Math.sqrt(n); d++){
    if(n%d===0){
      s+=d;
      if(d !== n/d) s += n/d;
    }
  }
  return n===1?0:s;
}
for(let n=2;n<=100;n++){
  if(somaDivisores(n)===n) console.log(n);
}
