// Exercício 71: Executar callback após N ms
function executarDepois(callback, ms) {
    setTimeout(callback, ms);
}

// Exemplo
executarDepois(() => console.log("Executado após 1s"), 1000);
