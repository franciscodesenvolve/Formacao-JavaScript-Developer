/*
Esse é um aplicativo que calculará o gasto de uma viagem
*/

/* PREÇO DO ETANOL */

const etanol = 5.79;
const gasolina = 6.66;
let kmPorLitros = 10;
let distanciaemKM = 100;
let tipoCombustivel = 'Gasolina';

const litrosConsumidos = (distanciaemKM / kmPorLitros);

/* CALCULO DO APLICATIVO */


if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * etanol;
    console.log(valorGasto.toFixed(2))
} else {
    const valorGasto = litrosConsumidos * gasolina;
    console.log(valorGasto.toFixed(2))
}
