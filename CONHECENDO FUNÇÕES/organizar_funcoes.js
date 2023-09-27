
function calcularIMC(peso, altura) {
    return  peso / Math.pow(altura,2);
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
        return 'Você está ABAIXO do peso, pois seu IMC é ' + IMC + '.';
    } else if (IMC >= 18.5 && IMC < 25) {
        return 'Você está com peso NORMAL, pois seu IMC é ' + IMC + '.';
    } else if (IMC >= 25 && IMC < 30) {
        return 'Você está ACIMA do peso, pois seu IMC é ' + IMC + '.';
    } else if (IMC >= 30 && IMC < 40) {
        return 'Você está OBESO, pois seu IMC é ' + IMC + '.';
    } else {
        return 'Você está com OBESIDADE GRAVE, pois seu IMC é ' + IMC + '.';
    }
}

function main () {
    const peso = 60;
    const altura = 1.62;

    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC.toFixed(2)))
}
main();

/* INVOCANDO DIRETAMENTE UMA FUNÇÃO (função anonima) */
(function main () {
    const peso = 80;
    const altura = 1.62;

    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC.toFixed(2)))
}) ()