/* APLICATIVO PARA CALCULAR O VALOR A SER PAGO POR UM PRODUTO A DEPENDER DA FORMA DE PAGAMENTO */

const valorProduto = 15.00;
const formaDePagamento = 'coloque a opção aqui';

if (formaDePagamento === 'debito') {
    const valorAPagar = valorProduto - ((valorProduto/100)*10);
    console.log('O valor do produto é:', valorProduto);
    console.log('O valor que será pago é:', valorAPagar);
} else if (formaDePagamento === 'dinheiro') {
    const valorAPagar = valorProduto - ((valorProduto/100)*15);
    console.log('O valor do produto é:', valorProduto);
    console.log('O valor que será pago é:', valorAPagar);
} else if (formaDePagamento === 'pix') {
    const valorAPagar = valorProduto - ((valorProduto/100)*15);
    console.log('O valor do produto é:', valorProduto);
    console.log('O valor que será pago é:', valorAPagar);
} else if (formaDePagamento === 'duas vezes') {
    const valorAPagar = valorProduto;
    console.log('O valor do produto é:', valorProduto);
    console.log('O valor que será pago é:', valorAPagar);
} else {
    const valorAPagar = valorProduto + ((valorProduto/100)*10)
    console.log('O valor do produto é:', valorProduto);
    console.log('O valor que será pago é:', valorAPagar);
}

