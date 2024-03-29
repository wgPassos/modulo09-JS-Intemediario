function comparaNumeros (num1, num2) {
    if (!num1 || !num2) {
        return `Preencha os dois números`
    }

    const primeiraFrasa = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1,num2);

    return `${primeiraFrasa}${segundaFrase}`
}

function criaPrimeiraFrase (num1, num2) {
    let saoiguais = ""

    if (num1 !== num2) {
        saoiguais = "não"
    } 
    return `Os nuúmeros ${saoiguais} são iguais. `;
}

function criaSegundaFrase (num1,num2) {
    let soma = num1 + num2;

    const compara10 = "menor"
    if (soma > 10) {
        compara10 = "maior"
    }

    const compara20 = "menor"
    if (soma > 20) {
        compara20 = "maior"
    }

    return `Sua soma é ${soma}, que é ${compara10} que 10 e ${compara20} que 20.`
}

console.log(comparaNumeros(-1,-10))




