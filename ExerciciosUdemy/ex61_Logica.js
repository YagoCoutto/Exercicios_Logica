//Escreve uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem e retorne True se a imagem estiver no modo paisagem


// Condição ternaria + Arrow function
const ePaisagem = (Largura, Altura) => Largura > Altura ? true : false;
console.log(ePaisagem(19200, 1080))

// Refatorando.. Condição ternaria + Arrow function
const ePaisagem02 = (Largura, Altura) => Largura > Altura;
console.log(ePaisagem02(1920, 1080))