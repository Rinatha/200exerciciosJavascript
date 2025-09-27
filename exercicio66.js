// Exercício 66: Filtrar array com callback
function filtrarArray(callback, array) {
    return array.filter(callback);
}

// Exemplo de uso
console.log(filtrarArray(x => x % 2 === 0, [1,2,3,4,5,6])); // [2,4,6]
