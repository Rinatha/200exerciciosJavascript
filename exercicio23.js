// Exercício 23: Escreva um programa que verifica as cores de um semáforo.
let cor = (typeof prompt !== 'undefined') ? prompt("Cor (vermelho/amarelo/verde):") : "verde";
cor = cor.toLowerCase();
if(cor === "vermelho") console.log("Pare");
else if(cor === "amarelo") console.log("Atenção");
else if(cor === "verde") console.log("Siga");
else console.log("Cor inválida");
