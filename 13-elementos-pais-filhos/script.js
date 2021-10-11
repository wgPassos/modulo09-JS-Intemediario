function adiciona () {
        let input = document.getElementById("input");
        let div = document.getElementById("d1");
        // console.log(div.children[0]);

        var lista = [];

        lista.push(input.value);
        console.log(lista);

        for (inp of lista) {

            div.innerHTML += "<li>" + inp + "</li>";
            input.value = "";
        }
}
    