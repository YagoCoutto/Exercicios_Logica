let input = require("fs").readFileSync("Desafios_Beecrowd/Salario_BEE 1008/stdin", "utf-8")
let valores = input.split('\n');

function entrada() {
    let numFuncionario = parseFloat(valores.shift());
    let horasTrbd = parseFloat(valores.shift());
    let valorHora= parseFloat(valores.shift());

    let messageNumber = `NUMBER = ${numFuncionario}`
    let messageSalary = `SALARY = U$ ${(horasTrbd*valorHora).toFixed(2)}`
    console.log(messageNumber, messageSalary)
}
entrada()

