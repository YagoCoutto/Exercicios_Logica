// Desafio: O maior numero

let input = require('fs').readFileSync('Desafios_Beecrowd/O_maior_BEE 1013/stdin', 'utf-8');
let [A,B,C] = input.split(" ").map(item => parseInt(item));

let maiorAB = (A + B + Math.abs(A - B)) / 2;
let maiorABC = (C + maiorAB + Math.abs(C - maiorAB)) / 2;
console.log(`${maiorABC} eh o maior`)

