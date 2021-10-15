

let main = document.querySelector("#main");
let input =  document.querySelector("#input");
let buttonLimpar = document.querySelector("#remove");
let listaDeTarefas = [];


onload = function () {
    let nome = localStorage.getItem("lista_tarefas");
    console.log(JSON.parse(nome[0]))
    ul.innerHTML += JSON.parse(nome);
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

        localStorage.setItem("lista_tarefas", JSON.stringify(listaDeTarefas));

        criarLi(listaDeTarefas)
        // console.log(input.value);
        input.value = ""
        // console.log(listaDeTarefas)
    }
}


let ul = document.getElementById("ul");

function criarLi(listaDeTarefas) {
    console.log(listaDeTarefas[0].conteudo);
    ul.innerHTML = "";
    for (var i = 0; i < listaDeTarefas.length; i++) {
        ul.innerHTML += `<li class="lessons"> ${listaDeTarefas[i].conteudo}<button class="btn-ok" onclick="tarefaFeita(this)">C</i></button> <button class="btn-excluir" onclick="tarefaExclui(this)">X</button></li>`;

        buttonLimpar.classList.remove("removeAllList");
    
        console.log(listaDeTarefas);
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
    localStorage.setItem("lista_tarefas")
}

function tarefaExclui(e) {
    let li = e.parentElement;
    ul.removeChild(li);
    localStorage.getItem("lista_tarefas")
    criarLi();
}

// console.log(listaDeTarefas);
    // container += "<li>" + input.value + "</li>"
        // let li = document.createElement("li");
        // li.classList.add("lessons");
        // li.appendChild(document.createTextNode(input.value));
        // ul.appendChild(li);
        // main.appendChild(ul);
        // list = ul;
        // input.value = "";
        // console.log(list);
        // buttonLimpar.classList.remove("remove");
        

        // salvarStorage();
    // listaDeTarefas.innerHTML = "";
    //     for  (list of listaDeTarefas) {
    //         console.log(list.conteudo);
    //         var li = "<li>" + list.conteudo +"</li>"
    //         input.value = ""
        // }

    // console.log(input);
    // console.log((listaDeTarefas[0].concluido));
    
    // console.log(li);

// createTaskDiv(li);
// }

// function createTaskDiv(li) {
//     // console.log(this)
//     let div = document.createElement("div");

//     let btnOk = document.createElement("button");
//     li.children.appendChild(div);
//     btnOk.classList.add("btn-ok");
//     btnOk.appendChild(document.createTextNode("C"));
//     // btnOk.innerHTML = '<i data-feather="plus"></i>'
//     div.appendChild(btnOk);

//     btnOk.setAttribute("onclick", "taskDone(this)");


//     let btnExcluir = document.createElement("button");
//     btnExcluir.appendChild(document.createTextNode("X"));
//     btnExcluir.classList.add("btn-excluir");
//     div.appendChild(btnExcluir);

//     btnExcluir.setAttribute("onclick", "excluiTask(this)");
// }

// function taskDone(e) {
//     let divButtons = e.parentElement;
//     let liDone = divButtons.parentElement;
    // liDone.classList.toggle("task-done");
// }

// function excluiTask(e) {
//     let parentDiv = e.parentElement;
//     let parentLi = parentDiv.parentElement;
//     list.removeChild(parentLi);
//     salvarStorage();
// }


// buttonLimpar.addEventListener("click", buttonRemoveList);

// function buttonRemoveList() {
//     list.innerHTML = "";
//     salvarStorage();
// }


// function salvarStorage () {
//     localStorage("salvo",  JSON.stringify(list));
// }

