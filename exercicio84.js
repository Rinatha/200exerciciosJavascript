// Exercício 84: Objeto "retangulo" com altura, largura e método área.

const retangulo = {
  altura: 8,
  largura: 5,
  area() {
    return this.altura * this.largura;
  }
};

// Teste rápido
console.log('Área do retângulo:', retangulo.area());
