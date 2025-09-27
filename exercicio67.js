// Exercício 67: Aplicar callback em cada array de arrays
function mapearArrays(callback, arrays) {
    return arrays.map(callback);
}

// Exemplo
console.log(mapearArrays(arr => arr.length, [[1,2], [3,4,5], [6]])); // [2,3,1]
