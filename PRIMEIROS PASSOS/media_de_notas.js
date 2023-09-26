const nota1 = 8;
const nota2 = 3;
const nota3 = 3.9;

const media = ((nota1 + nota2 + nota3) / 3);

if (media < 5) {
    console.log('Você está reprovado, pois sua média é:', media.toFixed(2));
} else if (media >= 5 && media<7) {
    console.log('Você está de recuperação, pois sua média é:', media.toFixed(2));
} else {
    console.log('Você está aprovado, pois sua média é:', media.toFixed(2));
}

