// Exercício 86: Objeto "livro" com título, autor, número de páginas e método para exibir.

const livro = {
  titulo: 'A Vida é um Ciclo Resiliente',
  autor: 'Shay',
  paginas: 320,
  exibir() {
    console.log(`"${this.titulo}" — ${this.autor} (${this.paginas} páginas)`);
  }
};

// Teste rápido
livro.exibir();
