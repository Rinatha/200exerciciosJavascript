// Exercício 72: Aplicar callbacks N vezes em um valor
function aplicarNTimes(n, callbacks, valorInicial) {
    let resultado = valorInicial;
    for (let i = 0; i < n; i++) {
        for (let cb of callbacks) {
            resultado = cb(resultado);
        }
    }
    return resultado;
}

// Exemplo
console.log(aplicarNTimes(2, [x => x+1, x => x*2], 1)); // 6
