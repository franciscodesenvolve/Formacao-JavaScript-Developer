//gets (é como se um usuário digitasse algo)
//prints (é muito parecido com o console.log)

const entradas = [5, 50 ,10, 98, 23];
let i = 0;

function gets() {
    return entradas[i];
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };