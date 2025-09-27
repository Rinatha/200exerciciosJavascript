// Exercício 74: Mapear array com callback sem alterar original
function mapearSemAlterar(callback, array) {
    return array.map(callback);
}

// Exemplo
let numeros = [1,2,3];
console.log(mapearSemAlterar(x => x*3, numeros)); // [3,6,9]
console.log(numeros); // [1,2,3]
