// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeroEscolhido = 40;
const numerosPar = []
const numeros = []

for (let i = 0; i <= numeroEscolhido; i++) {
    numeros.push(i);
    if ((i % 2) === 0) {
        numerosPar.push(i);
    }
}

console.log('Todos os números da lista: ' + numeros + '.');
console.log(' ');
console.log('E aqui estão todos os números pares entre 0 a ' + numeroEscolhido + ': ' + numerosPar + '.');
