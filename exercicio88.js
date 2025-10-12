// Exercício 88: Dado um array de preços, some o total após adicionar 10% de imposto (map + reduce).

const precos = [10, 25, 40, 99.9];
const comImposto = precos.map(p => p * 1.10);
const total = comImposto.reduce((acc, p) => acc + p, 0);

// Teste rápido
console.log('Preços com imposto:', comImposto.map(v => v.toFixed(2)));
console.log('Total:', total.toFixed(2));
