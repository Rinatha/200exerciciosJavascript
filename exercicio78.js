// Exercício 78: Objeto cachorro com método idade em humanos
let cachorro = {
    raca: "Vira-lata",
    nome: "Mickey",
    idade: 5,
    idadeHumana: function() {
        return this.idade * 7;
    }
};

console.log(cachorro.nome, "tem", cachorro.idadeHumana(), "anos humanos.");
