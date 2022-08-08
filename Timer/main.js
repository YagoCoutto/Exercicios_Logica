const relogio = document.querySelector('.relogio');
const iniciar = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const zerar = document.getElementById('zerar');

//cria (hora zerada)
function criarHoraSegundos(segundos) {
    const date = new Date(segundos * 1000)//segundos em milisegundos
    return date.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC' //Esta considerando 1/1/1970(ZERO HORA/ZERO SEGUNDO)
    });
}

// Bloco iniciar contagem
let segundos = 0
let timer;
function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criarHoraSegundos(segundos);
    }, 1000)

}
// Bloco iniciar
iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    iniciaRelogio(timer);
    relogio.classList.remove('pausado')

});

// Bloco Pausar
pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.add('pausado')
})

// Bloco Zerar
zerar.addEventListener('click', function (event) {
    segundos = 0
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'
    relogio.classList.remove('pausado')

})