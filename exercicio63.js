// Exercício 63: Escreva uma função que receba um número e retorne um array com todos os números primos até aquele número.
function primosAte(n){
  const r=[];
  for(let i=2;i<=n;i++){
    let p=true;
    for(let d=2; d<=Math.sqrt(i); d++){
      if(i%d===0){ p=false; break; }
    }
    if(p) r.push(i);
  }
  return r;
}
console.log(primosAte(50));
