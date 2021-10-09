

let main = document.querySelector("#main");
let input =  document.querySelector("#input");
let buttonLimpar = document.querySelector("#remove");
let listaDeTarefas = [];



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

        criarLi(input)
        input.value = ""
    }
}


let ul = document.createElement("ul");
ul.classList.add("list-lessons");

function criarLi(input) {
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
    listaDeTarefas.innerHTML = "";
        for  (list of listaDeTarefas) {
            console.log(list.conteudo);
            var li = "<li>" + list.conteudo +"</li>"
            input.value = ""
        }

    // console.log(input);
    // console.log((listaDeTarefas[0].concluido));
    
    console.log(li);

createTaskDiv(li);
}

function createTaskDiv(li) {
    // console.log(this)
    let div = document.createElement("div");

    let btnOk = document.createElement("button");
    li.children.appendChild(div);
    btnOk.classList.add("btn-ok");
    btnOk.appendChild(document.createTextNode("C"));
    // btnOk.innerHTML = '<i data-feather="plus"></i>'
    div.appendChild(btnOk);

    btnOk.setAttribute("onclick", "taskDone(this)");


    let btnExcluir = document.createElement("button");
    btnExcluir.appendChild(document.createTextNode("X"));
    btnExcluir.classList.add("btn-excluir");
    div.appendChild(btnExcluir);

    btnExcluir.setAttribute("onclick", "excluiTask(this)");
}

function taskDone(e) {
    let divButtons = e.parentElement;
    let liDone = divButtons.parentElement;
    liDone.classList.toggle("task-done");
}

function excluiTask(e) {
    let parentDiv = e.parentElement;
    let parentLi = parentDiv.parentElement;
    list.removeChild(parentLi);
    salvarStorage();
}


buttonLimpar.addEventListener("click", buttonRemoveList);

function buttonRemoveList() {
    list.innerHTML = "";
    salvarStorage();
}


function salvarStorage () {
    localStorage("salvo",  JSON.stringify(list));
}

