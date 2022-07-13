/* Escreva uma função que receba um numero e retorne o seguinte:
Numero é divisivel por 3 = Fizz
Numero é divisivel por 5 = Buzz
Numero é divisivel por 3 e 5 = FizzBuzz
Numero não é divisivel por 3 e 5 = Retorna o próprio numero
Checar se o numero é realmente um numero = Retorna o proprio numero
-> Use a função  com numeros de 0 a 100. */

function Divisivel(num) {
    if (typeof num !== 'number') return NaN;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'; // Deve ser checada primeiro
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num
}

console.log('a', Divisivel('a'))
for (let i = 0; i < 100; i++) {
    console.log(i, Divisivel(i))
}