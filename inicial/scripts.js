// 1. PEGAR ELEMENTOS DO HTML
const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

// 2. ARRAY QUE GUARDA AS TAREFAS 
let minhaListaDeItens = []


// 3. ADICIONAR O QUE FOI DIGITADO NO ARRAY
function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)
    mostrarTarefas()  // Atualiza o que aparece na tela
    input.value = ''
}

// 4. MOSTRAR TAREFAS NA TELA
function mostrarTarefas() {

    // Começa vazio e vai acumulando as <li>
    let novaLi = ''

    // Percorre cada tarefa do array
    minhaListaDeItens.forEach((tarefa) => {
        // Cria uma <li> para cada tarefa (o novaLi = novaLi é para ele sempre somar e não substituir o antigo)
        novaLi = novaLi + ` 
        
            <li class="task">
            <img src="./img/check.png" alt="check">
            <p>${tarefa}</p>
            <img src="./img/trash.png" alt="trash">
            </li>
            `
    })

    // Coloca todas as <li> dentro da lista no HTML
    listaCompleta.innerHTML = novaLi

}
// 5. QUANDO CLICAR NO BOTÃO ADICIONA A TAREFA
button.addEventListener('click', adicionarNovaTarefa)