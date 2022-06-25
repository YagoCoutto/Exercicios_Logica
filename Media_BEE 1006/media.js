let input = require("fs").readFileSync("Desafios_Beecrowd/Media_BEE 1006/stdin_entradas","utf8");
let valores = input.split("\n")

let nota_A = parseFloat(valores.shift());
let nota_B = parseFloat(valores.shift());
let nota_C = parseFloat(valores.shift());


let peso_A =  2;
let peso_B = 3;
let peso_C = 5;

let pesoXnota = (peso_A * nota_A) + (peso_B * nota_B) + (peso_C * nota_C)
let totalMedia = pesoXnota / 10
console.log(`MEDIA = ${totalMedia.toFixed(1)}`);