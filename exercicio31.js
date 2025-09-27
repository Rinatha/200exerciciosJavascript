// Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.
let min=1, max=100;
let segredo = (typeof prompt !== 'undefined') ? null : 73; // se não houver prompt, simulamos o número 73
let tentativa, resposta;
while(min<=max){
  tentativa = Math.floor((min+max)/2);
  if(typeof prompt !== 'undefined'){
    resposta = prompt(`Seu número é ${tentativa}? (responda: maior, menor, igual)`);
  } else {
    resposta = (tentativa<segredo) ? 'maior' : (tentativa>segredo ? 'menor' : 'igual');
  }
  if(resposta==='igual'){ console.log('Adivinhei:', tentativa); break; }
  if(resposta==='maior'){ min = tentativa + 1; }
  else if(resposta==='menor'){ max = tentativa - 1; }
}
