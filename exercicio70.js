// Exercício 70: Executar múltiplos callbacks em um valor
function aplicarCallbacks(callbacks, valor) {
    return callbacks.map(cb => cb(valor));
}

// Exemplo
console.log(aplicarCallbacks([x => x*2, x => x+10, x => x/2], 5)); // [10,15,2.5]
