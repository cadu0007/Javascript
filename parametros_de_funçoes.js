//parametros de funçoes 
function soma (numero1, num2) {
    return numero1 +num2;
}

console.log(soma(7, 7));
console.log(soma(77, 7));
console.log(soma(777, 77));

// parametros x argumentos 

// ordem dos parametros 


function nomeIdade(nome, idade){
    return `meu nome e ${nome} minha idade e ${idade}`;
}

// console.log(nomeIdade(17, "carlos"));

function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}
console.log(multiplica(soma(4, 5))); 








