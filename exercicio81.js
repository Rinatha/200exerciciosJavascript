// Exercício 81: Crie um objeto representando uma conta bancária, que possui uma propriedade de saldo e métodos para depósito e saque.

const conta = {
  saldo: 0,
  depositar(valor) {
    if (typeof valor !== 'number' || valor <= 0) {
      console.log('Valor inválido para depósito.');
      return;
    }
    this.saldo += valor;
    console.log(`Depósito: R$${valor}. Saldo: R$${this.saldo}`);
  },
  sacar(valor) {
    if (typeof valor !== 'number' || valor <= 0) {
      console.log('Valor inválido para saque.');
      return;
    }
    if (valor > this.saldo) {
      console.log('Saldo insuficiente.');
      return;
    }
    this.saldo -= valor;
    console.log(`Saque: R$${valor}. Saldo: R$${this.saldo}`);
  }
};

// Teste rápido
conta.depositar(100);
conta.sacar(30);
conta.sacar(1000); // insuficiente
