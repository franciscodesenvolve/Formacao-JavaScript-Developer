/* CONCEITO DE FUNÇÃO E ESTRUTURA */



function sayMyName(name) {
    console.log('Your name is', name);
}

sayMyName('Renan');
sayMyName('Vitor');
sayMyName('Francisco');
console.log('----------------------------------------------------------')


function quadrado(valor) {
    return valor*valor;
    
}

console.log(quadrado(10))
const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez)

console.log('----------------------------------------------------------')

function incrementarJuros(valor, percentualJuros) {
    const juros = (percentualJuros / 100) * valor;
    return juros + valor;
}

console.log(incrementarJuros(200, 5))