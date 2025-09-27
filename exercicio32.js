// Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.
function jogadaPC(){ return ['pedra','papel','tesoura'][Math.floor(Math.random()*3)]; }
function resultado(u,c){
  if(u===c) return 'Empate';
  if((u==='pedra'&&c==='tesoura')||(u==='papel'&&c==='pedra')||(u==='tesoura'&&c==='papel')) return 'Você venceu';
  return 'Computador venceu';
}
let continuar;
do{
  let user = (typeof prompt !== 'undefined') ? prompt('Escolha: pedra, papel ou tesoura') : 'pedra';
  let comp = jogadaPC();
  console.log('Você:', user, '| PC:', comp, '=>', resultado(user,comp));
  continuar = (typeof prompt !== 'undefined') ? prompt('Jogar novamente? (s/n)') : 'n';
}while(continuar==='s');
