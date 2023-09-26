/*  CÁLCULO DO IMC  */

const peso = 110;
const altura = 1.62;

const IMC = peso / (altura* altura) ;


/*  CONDIÇÕES PARA CALCULO DO IMC  */

console.log("Seu IMC é:", IMC.toFixed(2))

if (IMC < 18.5) {
    console.log("Você está ABAIXO do peso.")
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("Você está com peso NORMAL.")
} else if (IMC >= 25 && IMC < 30) {
    console.log("Você está ACIMA do peso.")
} else if (IMC >= 30 && IMC < 40) {
    console.log("Você está OBESO")
} else {
    console.log("Você está com  OBESIDADE GRAVE")    
}