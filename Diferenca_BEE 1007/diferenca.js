let input = require("fs").readFileSync("Desafios_Beecrowd/Diferenca_BEE 1007/stdin","utf8");
let valores = input.split("\n")

let A = parseInt(valores.shift());
let B = parseInt(valores.shift());
let C = parseInt(valores.shift());
let D = parseInt(valores.shift());

let DIFERENCA = (A*B) - (C*D);

console.log(`DIFERENCA = ${DIFERENCA}`)

