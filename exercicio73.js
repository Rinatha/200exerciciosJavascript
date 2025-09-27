// Exercício 73: Aplicar callbacks em intervalos
function aplicarComIntervalo(n, callbacks, valorInicial, intervalo) {
    let resultado = valorInicial;
    let count = 0;
    let id = setInterval(() => {
        for (let cb of callbacks) {
            resultado = cb(resultado);
        }
        console.log("Iteração", count+1, ":", resultado);
        count++;
        if (count >= n) clearInterval(id);
    }, intervalo);
}

// Exemplo
aplicarComIntervalo(3, [x => x+1, x => x*2], 1, 1000);
