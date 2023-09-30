class Carro {

    //DEFINIÇÃO DE COMO É UM CARRO
    marca;
    cor;
    gastoMedioPorKm;

    //CONSTRUINDO O CARRO
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    //MÉTODO PARA CALCULAR O GASTO DO PERCURSO COM SEU CARRO
    calcularGastoDePercurso(distanciaEmKM, precoCombustivel){
        return distanciaEmKM * precoCombustivel * this.gastoMedioPorKm;
    }
} 

//INSTANCIANDO UM OBJETO (CARRO)
const uno = new Carro ('Fiat', 'Prata', 1/12);
console.log(`O carro tem consumo de ` + uno.calcularGastoDePercurso(70, 5).toFixed(2) + ` reais.
`);

const palio = new Carro ('Fiat', 'Preto', 0.1);
console.log(`O carro tem consumo de ` + palio.calcularGastoDePercurso(70, 5).toFixed(2) + ` reais.
`);