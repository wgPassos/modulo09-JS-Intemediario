let a = {nome: "Willian", n1: 7.8};

localStorage.setItem("aluno", JSON.stringify(a));

let a = localStorage.getItem("aluno");
console.log(JSON.parse(a));