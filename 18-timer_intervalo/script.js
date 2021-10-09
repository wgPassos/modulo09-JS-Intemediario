
// PRIMEIRO EXEMPLO

    // function mudeCor () {
    //     let h = document.        getElementsByTagName("h1")[0];
    //     h.style.color = "blue";
    // }

    // function mudarTexto () {
    //     let h = document.getElementsByTagName("h1")[0];
    //     h.innerHTML = "Mudar TEXTO";

    //     //  setTimeOut = executa alguma função (qaulquer coisa) com um delay
    //     setTimeout(mudeCor, 2000);
    // }


// SEGUNDO EXEMPLO

    // var numero = 0;

    // function atualizarTexto () {
    //     let h = document.getElementsByTagName("h1")[0];
    //     h.innerHTML += " " + numero;
    //     numero++;
    // }

    // function mudarTexto () {

    //     setInterval(atualizarTexto, 2000);
    // }

// TERCEIRO EXEMPLO


var hora = 0;

var interval;

function atualizarTexto () {
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += " "  + hora;
    hora++;
    
}

function iniciar () {
    interval = setInterval(atualizarTexto, 2000);
}

function parar () {
    clearInterval(interval, 1000);
}