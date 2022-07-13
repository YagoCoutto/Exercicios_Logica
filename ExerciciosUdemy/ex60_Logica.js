// Escreva uma função que receba dois numeros e retorne o maior deles.
function maior(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}
console.log(maior(100,50))

// Refatorando.. Condição ternaria
function max(a, b){
    return a > b ? a : b
}
console.log(maior(50, 10))


// Refatorando.. Condição ternaria + Arrow function
const numMax = (a,b) => {return a > b ? a : b}
console.log(numMax(85, 80))

// Refatorando.. Condição ternaria + Arrow function implícito
const MaxNum = (a, b) => a > b ? a : b;
console.log(MaxNum(1200, 1199))