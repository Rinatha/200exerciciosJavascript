// Exercício 77: Objeto livro com método descrição
let livro = {
    titulo: "A Vida é um Ciclo Resiliente",
    autor: "Shirley Weiss",
    paginas: 300,
    descricao: function() {
        console.log(`${this.titulo}, escrito por ${this.autor}, tem ${this.paginas} páginas.`);
    }
};

livro.descricao();
