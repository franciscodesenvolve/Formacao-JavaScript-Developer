
// A classe define como são os objetos.
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e eu nasci em ${this.anoDeNascimento}.`);
    }
}

//INSTANCIANDO UMA NOVA "PESSOA"
const vitor = new Pessoa('Vitor', 26);
const renan = new Pessoa('Renan', 31);


vitor.descrever();
renan.descrever();
