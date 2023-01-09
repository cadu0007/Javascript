const notas = [10, 6, 8, 8, 5.5];

notas.pop();

const media = (notas[0]+ notas[1] + notas[2]+ notas[3]) / notas.length;

console.log(`sua nota foi ${media}`);
