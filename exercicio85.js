// Exercício 85: Objeto "quadrado" que herda de "retangulo" e substitui o método de área.

const retangulo = {
  altura: 0,
  largura: 0,
  area() {
    return this.altura * this.largura;
  }
};

const quadrado = Object.create(retangulo);
quadrado.lado = 6;
quadrado.area = function () {
  return this.lado ** 2;
};

// Teste rápido
console.log('Área do quadrado:', quadrado.area());
