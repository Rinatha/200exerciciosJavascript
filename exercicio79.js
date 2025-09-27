// Exercício 79: Objeto carro com métodos
let carro = {
    marca: "Ford",
    modelo: "Ka",
    ano: 2010,
    velocidade: 0,
    acelerar: function() { this.velocidade += 10; },
    frear: function() { if (this.velocidade>=10) this.velocidade -= 10; },
    getVelocidade: function() { return this.velocidade; }
};

carro.acelerar();
carro.acelerar();
console.log("Velocidade:", carro.getVelocidade()); // 20
carro.frear();
console.log("Velocidade:", carro.getVelocidade()); // 10
