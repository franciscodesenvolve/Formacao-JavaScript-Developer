
// OBJETO é uma coleção de dados

const pessoa = {
    nome: 'Vitor J Guerra',
    idade: 25,

    // a função vira um objeto, pois está dentro do escopo do objeto.
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha ${this.idade}.`);
    }
}

pessoa.nome = 'Renan';
pessoa.idade = 30;
pessoa.descrever();

console.log('-------------------------------');

const atributo = 'idade';

console.log(pessoa[atributo]);