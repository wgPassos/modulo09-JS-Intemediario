let hh = 0;
let mm = 0;
let ss = 0;

let tempo = 1000; // milésimos
let cron;

function iniciar () {
    // cron = setInterval(timer, tempo);
    // Outra forma de fazer com Arrow Function: ES6 => 
    cron = setInterval(() => {
        timer();
    }, tempo);
}

function parar () {
    clearInterval(cron);
}

function zerar () {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById("output").innerHTML = "00:00:00";
}

function timer () {
    ss++;
    if (ss == 60) {
        mm ++;
        ss = 00
    } 
    if (mm == 60) {
        hh ++;
        mm = 00;
    }

    // var format =
    //     (hh < 10 ? "0" + hh : hh) +
    //     ":" +
    //     (mm < 10 ? "0" + mm : mm) +
    //     ":" +
    //     (ss < 10 ? "0" + ss : ss);

    // Outra forma de fazer, função passando parâmetros

    var format = number(hh) + ":" + number(mm) + ":" + number(ss);

    document.querySelector("#output").innerHTML = format;
}

function number (e) {
    return e < 10 ? "0" + e : e;
}