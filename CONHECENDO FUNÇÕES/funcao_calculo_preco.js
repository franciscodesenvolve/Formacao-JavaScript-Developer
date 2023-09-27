/* FUNÇÕES PARA CALCULO DAS FORMAS DE PAGAMENTO */

function aplicarDesconto(valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros) {
    return (valor + (valor * (juros / 100)))
}


/* APLICATIVO PARA CALCULAR O VALOR A SER PAGO POR UM PRODUTO A DEPENDER DA FORMA DE PAGAMENTO */

const precoEtiqueta = 15.00;
const formaDePagamento = 'debito';

if (formaDePagamento === 'debito') {
    console.log('O valor do produto é:', precoEtiqueta);
    console.log('O valor que será pago é:', aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 'dinheiro') {
    console.log('O valor do produto é:', precoEtiqueta);
    console.log('O valor que será pago é:', aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 'pix') {
    console.log('O valor do produto é:', precoEtiqueta);
    console.log('O valor que será pago é:', aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 'duas vezes') {
    console.log('você irá pagar o preço de etiqueta, sem desconto');
    console.log('O valor que será pago é:', precoEtiqueta);
} else {
    console.log('O valor do produto é:', precoEtiqueta);
    console.log('O valor que será pago é:', aplicarJuros(precoEtiqueta, 10));
}
