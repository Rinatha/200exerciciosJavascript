// Exercício 69: Executar callback N vezes
function repetir(n, callback) {
    for (let i = 0; i < n; i++) {
        callback(i);
    }
}

// Exemplo
repetir(3, i => console.log("Execução:", i));
