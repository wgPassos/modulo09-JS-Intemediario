// localStorage.setItem(); ----- SALVA
// localStorage.getItem(); ----- PEGA
// localStorage.removeItem(); --- APAGA
var ul = [];

localStorageSave();

function localStorageSave () {
    let nome = localStorage.getItem("nome");
    let h1 = document.querySelector("#nome");
    h1.innerHTML = nome;
}

function atualizar(element) {

    let valor = element.value;
    console.log(valor);

    let h1 = document.querySelector("#nome");
    h1.innerHTML += valor;
    element.value = "";

    localStorage.setItem("nome", valor);
}