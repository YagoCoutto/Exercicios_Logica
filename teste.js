function horaAtualizada(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const time = setInterval(function (){
    console.log(horaAtualizada());
}, 1000)

setInterval(function(){
    clearInterval(time);
}, 2000)