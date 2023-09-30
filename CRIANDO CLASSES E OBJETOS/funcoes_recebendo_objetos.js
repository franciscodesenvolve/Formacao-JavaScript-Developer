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

function compararPessoas(p1,p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p2.nome} tem a mesma idade que ${p1.nome}.`);
    }
}

const Francisco = new Pessoa ('Francisco', 30);
const Luana = new Pessoa ('Luana', 32);

compararPessoas(Francisco, Luana);
Francisco.descrever();
Luana.descrever();