import imput from 'readline-sync';
let juros;

function calculoJuros(valor, tempo){
    let valorExtra;
    let valorFinal;
    if(tempo <= 15){
        juros = 0.05
        valorExtra = valor * juros;
        valorFinal = Number(valorExtra) + Number(valor); 
    }else{
        juros = 0.1
        valorExtra = valor * juros;
        valorFinal = Number(valorExtra) + Number(valor); 
    }
    return valorFinal;
}

console.log("Aplicação de juros:\n\n");

let valorDivida = imput.question('Informe o valor devido: ');
let dias =imput.question('Informe quantos dias se passaram desdo vencimento do boleto: ');

let valorComJuros = calculoJuros(valorDivida, dias);

console.log(`Valor original da dívida: R$ ${valorDivida}`);
console.log(`Dias atrasados: ${dias}`);
console.log(`Taxa de Juros: ${juros}`);
console.log(`Valor total com juros: R$ ${valorComJuros}`);
