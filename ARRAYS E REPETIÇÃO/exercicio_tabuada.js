// 1) Crie um programa que dado um número, imprima a sua tabuada.

const tabuada = 8;
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    const mult = tabuada * numero;
    console.log(`${tabuada} x ${numero} = ${mult}`);
}

