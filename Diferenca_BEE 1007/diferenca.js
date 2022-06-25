

let input = require("fs").readFileSync("Desafios_Beecrowd/Diferenca_BEE 1007/stdin","utf8");
let valores = input.split("\n")

let A = parseInt(valores.shift());
let B = parseInt(valores.shift());
let C = parseInt(valores.shift());
let D = parseInt(valores.shift());

let DIFERENCA = (A*B) - (C*D);

console.log(`DIFERENCA = ${DIFERENCA}`)


/*
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.
*/