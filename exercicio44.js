// Exercício 44: Usando um laço do-while, crie um programa que imprima a soma de duas matrizes.
let A=[[1,2,3],[4,5,6]], B=[[6,5,4],[3,2,1]];
let i=0;
do{
  let linha=[];
  for(let j=0;j<A[0].length;j++){ linha.push(A[i][j]+B[i][j]); }
  console.log(linha);
  i++;
}while(i<A.length);
