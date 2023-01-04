//declaração de função
//eles não terminaram essa função 

let num1 = 1;
let num2 = 2;

function minhafunçao(param) {
    //bloco de de codigo 
}


function mostrarValoresIniciais(){
   console.log(num1);
   console.log(num2);
}

function calcularSomaVoid(){
   num1 = num1+1; //2
   num2 = num2+2; //4
}

//retorno de string
function apresentar() {
    return "olá"
}

//retorno de number
function calcularSoma(num1, num2){
   return num1+num2;
}

//void
function mostrarVoid(str){
    console.log(str);
}

minhafunçao("param")

//expressão de funçao 

console.log(apresentar());

mostrarVoid('Hello world');

calcularSomaVoid();

mostrarValoresIniciais(); //2 - 4

let resultadoFinal = calcularSoma(1,2);

//6
let resultadoSomado = calcularSoma(num1,num2);

console.log(soma(1, 1));
const soma = function(num1, num2) { return num1 +num2 }

let teste = soma(1, 2);
