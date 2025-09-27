// Exercício 41: Usando um laço do-while, crie um programa que transforme um número decimal em binário.
let n = (typeof prompt !== 'undefined') ? Number(prompt('Decimal:')) : 13;
if(n===0){ console.log('0'); }
else{
  let bin=''; let num=n;
  do{ bin = (num%2) + bin; num = Math.floor(num/2); }while(num>0);
  console.log(bin);
}
