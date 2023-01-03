//02.declaração de vareaveis 
//var, let e const

//VAR foi a primeira que surgio no javascript e ela pode ser usada em basicamente em qualquer lugar do codigo, mais ne um codigo muito grande pode dar problema.

// var altura = 12;
// var comprimento = 14;

// area = altura * comprimento;
// console.log(area);
// var area;

// no caso da LET ela já e um pouco mais de regras justamente para não dar bag, uma delas e se voce chamar uma let e dar um nome para ela crias um bloco de codigo e depois dar o mesmo nome para outra let não da bag porque o let e basicamente para aquela parte.

// let forma = 'retangulo'
// let altura = 12;    
// let comprimento = 14;
// let area;

// if (forma === 'retangulo'){
//     area = altura * comprimento;
// }else{
//     area = (altura * comprimento) / 2;
// }
// console.log(area);

const forma = 'retangulo';
const altura = 5;
const comprimento = 7;
let area;

if (area === 'retangulo') {
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}
console.log(area);