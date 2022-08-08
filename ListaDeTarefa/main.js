const inputTarefas = document.querySelector('.input-nova-tarefa');
const addTarefa = document.querySelector('.btn-add-tarefa');
const listaTarefa = document.querySelector('.tarefas');
const apagar = document.querySelector('.apagar')



// Adicionar valor utilizando ENTER
inputTarefas.addEventListener('keypress', function(event){
    if (event.keyCode === 13){
        if (!inputTarefas.value) return; 
        criaTarefa(inputTarefas.value);
    }
})

//Cria lista
function criaLI() {
    const lista = document.createElement('li');
    return lista;
}
//Cria LI
function criaTarefa(textoInput) {
    const list = criaLI();
    list.innerHTML = textoInput;
    listaTarefa.appendChild(list);
    criaBtnApagar(list); 
    salvarTarefas()
    limpaInput();

}
// Limpar input e foca
function limpaInput(){
    inputTarefas.value = '';
    inputTarefas.focus();
}
// Botão apagar
function criaBtnApagar(list){
    list.innerHTML += ' '; // espaço entre valor e btn
    const btnApagar = document.createElement('button'); //cria button
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.innerText = 'Apagar'; // btn recebe um nome
    list.appendChild(btnApagar); // adiciona o btn na lista
}


addTarefa.addEventListener('click', function () {
    if (!inputTarefas.value) return;
    criaTarefa(inputTarefas.value);
})

document.addEventListener('click', function(e){
    const eventoList = e.target;

    if (eventoList.classList.contains('apagar')){
        eventoList.parentElement.remove();
        salvarTarefas();
    }
})

// Salvas lista
function salvarTarefas(){
    const liTarefas = listaTarefa.querySelectorAll('li')
    const listaDeTarefaSalva = [];
    for (let listaSalva of liTarefas){
        let listaSalvaTxt = listaSalva.innerText;
        listaSalvaTxt = listaSalvaTxt.replace('Apagar', '');
        listaDeTarefaSalva.push(listaSalvaTxt)
    }

    const tarefasJSON = JSON.stringify(listaDeTarefaSalva);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalva(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let trf of listaDeTarefas){
        criaTarefa(trf)
    }

}
adicionaTarefasSalva()