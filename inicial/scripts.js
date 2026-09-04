const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')


let minhaListaDeItens = []



function adicionarNovaTarefa() {
    if (input.value.trim() === '') {
        return
    }

    minhaListaDeItens.push({
        tarefa: input.value,
        concluido: false
    })
    input.value = ''
    mostrarTarefas()  
    
}

function mostrarTarefas() {

    let novaLi = ''

    minhaListaDeItens.forEach((item, posicao) => {
        novaLi = novaLi + ` 
        
            <li class="task ${item.concluida && "done"}">
            <img src="./img/check.png" alt="check" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="trash" onclick="deletarItem(${posicao})"> 
            </li>
            `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}
button.addEventListener('click', adicionarNovaTarefa)
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarNovaTarefa()
    }
})

function deletarItem(posicao) {
    minhaListaDeItens.splice(posicao, 1)
    mostrarTarefas()
    
    }
    
function concluirTarefa(posicao) {
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida 
    mostrarTarefas()
}

function recarregarTarefas(){
    const tarefasLocalStorage = localStorage.getItem('lista')

    if(tarefasLocalStorage){
    minhaListaDeItens = JSON.parse(tarefasLocalStorage)
    }
    mostrarTarefas()
}

recarregarTarefas()