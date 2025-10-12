// Exercício 82: Crie um objeto "circulo" que possui uma propriedade de raio e dois métodos que calculam a área e a circunferência.

const circulo = {
  raio: 5,
  area() {
    return Math.PI * this.raio ** 2;
  },
  circunferencia() {
    return 2 * Math.PI * this.raio;
  }
};

// Teste rápido
console.log('Área:', circulo.area().toFixed(2));
console.log('Circunferência:', circulo.circunferencia().toFixed(2));
