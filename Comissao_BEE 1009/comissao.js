let input = require("fs").readFileSync('Desafios_Beecrowd/Comissao_BEE 1009/stdin','utf-8')

let valores = input.split('\n');

let userName = valores.shift();
let comissao = parseFloat(valores.shift());
let salario = parseFloat(valores.shift());

result = (salario*0.15)+comissao;

console.log(`TOTAL = R$ ${result.toFixed(2)}`);
