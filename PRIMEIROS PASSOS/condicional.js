/*
APRENDENDO A USAR A CONDICIONAL ---> Boolean
= atribuição
== igualdade, mas ignora o tipo
=== igualdade, não compara com tipos
*/

const numero = 9;
const NumeroPar = (numero % 2) === 0;

if (NumeroPar) {
    console.log("Par")
} else {
    console.log("Ímpar")
}

console.log("---------------------------------")


const numero2 = 0;
const isnumeroDivisivel = (numero2 % 5) === 0;

if (numero2 === 0) {
    console.log("O número é inválido!")
} else if (isnumeroDivisivel) {
    console.log("O número é divisível por 5")
} else {
    console.log("O número não é divisível por 5")
}