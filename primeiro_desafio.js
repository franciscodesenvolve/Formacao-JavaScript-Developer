const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKM = 1580;

let consumoPorLitro = precoCombustivel/kmPorLitros;
let consumoDaViagem = consumoPorLitro * distanciaEmKM;

console.log("O gasto que você terá em sua viagem é R$", consumoDaViagem.toFixed(2))