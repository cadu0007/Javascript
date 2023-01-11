const notas = [10, 6.5, 8, 7.5];

let somasDasNotas = 0; 

notas.forEach(function(nota){
    somasDasNotas += nota;
});

const media = somasDasNotas / notas.length;

console.log(`a media das suas notas é ${media}`);