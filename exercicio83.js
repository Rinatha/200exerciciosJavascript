// Exercício 83: Crie um objeto "tempo" com horas, minutos e segundos e método para converter em segundos.

const tempo = {
  horas: 1,
  minutos: 30,
  segundos: 15,
  paraSegundos() {
    return this.horas * 3600 + this.minutos * 60 + this.segundos;
  }
};

// Teste rápido
console.log('Total em segundos:', tempo.paraSegundos());
