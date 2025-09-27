// Exercício 75: Aplicar callbacks em ordem inversa
function aplicarInverso(callbacks, valor) {
    return callbacks.reverse().map(cb => cb(valor));
}

// Exemplo
console.log(aplicarInverso([x=>x+1, x=>x*2, x=>x-3], 5)); // [2,10,6]
