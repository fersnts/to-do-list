// 1. PEGAR ELEMENTOS DO HTML
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

// 2. ARRAY QUE GUARDA AS TAREFAS 
let minhaListaDeItens = []


// 3. ADICIONAR O QUE FOI DIGITADO NO ARRAY
function adicionarNovaTarefa() {
    if (input.value.trim() === '') {
        return
    }

    minhaListaDeItens.push({
        tarefa: input.value,
        concluido: false
    })
    input.value = ''
    mostrarTarefas()  // Atualiza o que aparece na tela
    
}

// 4. MOSTRAR TAREFAS NA TELA
function mostrarTarefas() {

    // Começa vazio e vai acumulando as <li>
    let novaLi = ''

    // Percorre cada tarefa do array + poe o index
    minhaListaDeItens.forEach((item, posicao) => {
        // Cria uma <li> para cada tarefa (o novaLi = novaLi é para ele sempre somar e não substituir o antigo)
        novaLi = novaLi + ` 
        
            <li class="task ${item.concluida && "done"}">
            <img src="./img/check.png" alt="check" onclick="concluirTarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/trash.png" alt="trash" onclick="deletarItem(${posicao})"> 
            </li>
            `
    })

    // Coloca todas as <li> dentro da lista no HTML
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhaListaDeItens))

}
// 5. QUANDO CLICAR NO BOTÃO ADICIONA A TAREFA
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