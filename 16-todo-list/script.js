

let main = document.querySelector("#main");
let input =  document.querySelector("#input");
let buttonLimpar = document.querySelector("#remove");
let listaDeTarefas = [];
let ul = document.getElementById("ul");

onload = function () {
    let nome = localStorage.getItem("lista_tarefas");
    // console.log(JSON.parse(nome[0]));
    console.log(nome );
    if (nome === null) {}
    else {
        listaDeTarefas.innerHTML = JSON.parse(nome);
        criarLi();
    }
}


input.addEventListener("keypress", createListEnter);

function createListEnter() {
    if (event.which == 13) {
        buttonCreateList();
    }
}


function buttonCreateList() {
    if (input.value === '') {
        alert("Enter a note")
    } else {
        listaDeTarefas.push({
            id: Math.round(),
            conteudo: input.value,
            concluido: false,
        })

        
        criarLi(listaDeTarefas)
        
        // console.log(input.value);
        input.value = ""
        // console.log(listaDeTarefas)
    }
}




function criarLi(listaDeTarefas) {
    // console.log(listaDeTarefas[0].conteudo)
    ul.innerHTML = "";
    for (var i = 0; i < listaDeTarefas.length; i++) {
        ul.innerHTML += `<li class="lessons"> ${listaDeTarefas[i].conteudo}<button class="btn-ok" onclick="tarefaFeita(this)">C</i></button> <button class="btn-excluir" onclick="tarefaExclui(this)">X</button></li>`;

        buttonLimpar.classList.remove("removeAllList");
    localStorage.setItem("lista_tarefas", JSON.stringify(listaDeTarefas));
        // console.log(listaDeTarefas);
    }
    
}

function buttonRemoveList() {
    localStorage.clear()
    ul.innerHTML = "";
    listaDeTarefas = [];
    
}

function tarefaFeita(e) {
    console.log(e.parentElement);
    let li = e.parentElement;
    li.classList.toggle("task-done");
    // localStorage.setItem("lista_tarefas", listaDeTarefas)
    
}

function tarefaExclui(e) {
    console.log(e.parentElement);
    let li = e.parentElement;
    ul.removeChild(li);
    localStorage.removeItem("lista_tarefas")
    
}


