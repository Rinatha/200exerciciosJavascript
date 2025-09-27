// Exercício 68: Filtrar números com callback
function filtrarNumeros(array, callback) {
    return array.filter(callback);
}

// Exemplo
console.log(filtrarNumeros([10,15,20,25], n => n > 18)); // [20,25]
