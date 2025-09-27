// Exercício 80: Objeto estudante com método média
let estudante = {
    nome: "Aleyvya",
    notas: [8, 9, 7, 10],
    media: function() {
        let soma = this.notas.reduce((a,b) => a+b, 0);
        return soma / this.notas.length;
    }
};

console.log(estudante.nome, "tem média", estudante.media());
