class Pessoa {

    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (Math.pow(this.altura, 2));
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return ' e você está ABAIXO do peso.';
        } else if (imc >= 18.5 && imc < 25) {
            return ' e você está com peso NORMAL.';
        } else if (imc >= 25 && imc < 30) {
            return ' e você está ACIMA do peso.';
        } else if (imc >= 30 && imc < 40) {
            return ' e você está OBESO.';
        } else {
            return ' e você está com  OBESIDADE GRAVE.';
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(`O IMC de ${jose.nome} é ` + jose.calcularImc().toFixed(2) + jose.classificarImc());

const renan = new Pessoa('Renan', 63, 1.75);
console.log(`O IMC de ${renan.nome} é ` + renan.calcularImc().toFixed(2)  + renan.classificarImc());

const vitor = new Pessoa('Vitor', 60, 1.69);
console.log(`O IMC de ${vitor.nome} é ` + vitor.calcularImc().toFixed(2)  + vitor.classificarImc());