import imput from 'readline-sync';

let salarioMinimo = [

    {valor: 510.00, ano: 2010},
    {valor: 545.00 , ano:2011},
    {valor: 622.00 , ano:2012},
    {valor: 678.00 , ano:2013},
    {valor: 724.00 , ano:2014},
    {valor: 788.00 , ano:2015},
    {valor: 880.00 , ano:2016},
    {valor: 937.00 , ano:2017},
    {valor: 954.00, ano:2018},
    {valor: 998.00 , ano:2019},
    {valor: 1045.00 , ano:2020}
    
];

let ipca = [
    {valor: 5.91, ano: 2010},
    {valor: 6.50 , ano:2011},
    {valor:5.84, ano:2012},
    {valor:5.91 , ano:2013},
    {valor: 6.41 , ano:2014},
    {valor: 10.67 , ano:2015},
    {valor:6.29 , ano:2016},
    {valor:2.95 , ano:2017},
    {valor: 3.75, ano:2018},
    {valor:4.31 , ano:2019},
    {valor:4.52 , ano:2020}
];

console.log("Escolha uma das alternativas: \n\n");

console.log("1- Listar os salários mínimos de 2010 à 2020");
console.log("2- Listar o indice IPCA de 2010 à 2020");
console.log("3- Comparação entre o porcentual de aumento salarial e o IPCA\n");

let opcao = imput.question('Digite o numero da sua escolha: \n');

opcao = Number(opcao);

switch(opcao){
    case 1:
        for(let sal of  salarioMinimo){
            let ano = sal.ano;
            let valor = sal.valor;
            let str1 = "Ano: ";
            let str2= "Salário Mínimo: ";

            console.log(str1.padEnd(20, ".") + ano);
            console.log(str2.padEnd(20, ".") + "R$ "+valor.toFixed(2).replace(".",","));
            console.log("\n");
        }
    break
    case 2:
        for(let imp of  ipca){
            let ano = imp.ano;
            let valor = imp.valor;
            let str1 = "Ano: ";
            let str2= "Inflação ICPA: ";

            console.log(str1.padEnd(20, ".") + ano);
            console.log(str2.padEnd(20, ".") + valor.toFixed(2).replace(".",",")+"%");
            console.log("\n");
        }
    break;
    case 3:
        for(let i = 0; i < 11;i++){

            let valorSalarioMin = salarioMinimo[i].valor
            let valorIpca = ipca[i].valor
            let ano = salarioMinimo[i].ano

            let str1 = "Ano: ";
            let str2= "Salário Minimo: ";
            let str3= "Inflação ICPA: ";
            let str4= "Crescimento Salarial: ";
             
            let valorAnterior =  salarioMinimo[i - 1];
            if(valorAnterior != undefined){
                valorAnterior = valorAnterior.valor;
            }
            let diferenca = valorSalarioMin - valorAnterior;
            let crescimento = (diferenca/valorAnterior)*100;

            console.log(str1.padEnd(20, ".") + ano);
            console.log(str2.padEnd(20, ".") + "R$ "+ valorSalarioMin.toFixed(2).replace(".", ",") );
            if(valorAnterior == undefined){
                console.log(str4.padEnd(20, ".") + "-");
            }else{
                console.log(str4.padEnd(20, ".") + crescimento.toFixed(2).replace(".", ",") +"%");
            }
            console.log(str3.padEnd(20, ".") + valorIpca.toFixed(2).replace(".", ",")+"%");
            console.log("\n");
            
        }
        break
    default:
        console.log("Opção Invalida!!!")
        break
}
