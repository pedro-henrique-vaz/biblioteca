import {questionNumber} from "./utils"

async function main() {
    let valorUm: number = await questionNumber('Primeiro valor: ')
    let valorDois: number = await questionNumber('Segundo valor: ')
    let valorTres: number = await questionNumber('Terceiro valor: ')
    // let maiorValor: number = descobrindoMaiorValor(valorUm, valorDois, valorTres)
    const {menor, meio, maior} = colocandoEmOrdemCrescente(valorUm, valorDois, valorTres)
    // let menorValor: number = descobrindoMenorValor(valorUm, valorDois, valorTres)
    // let valorDoMeio: number = descobrindoValorDoMeio(valorUm, valorDois, valorTres, menorValor, maiorValor)
    // console.log(maiorValor)
    // console.log(valorDoMeio)
    // console.log(menorValor)
    console.log(menor, meio, maior)
}
function descobrindoMaiorValor(valorUm: number, valorDois: number, valorTres: number): number {
    return Math.max(valorUm, valorDois, valorTres)

    // let maiorValor = valorDois
    // if (valorUm > valorDois){
    //     maiorValor = valorUm
    // }
    //
    // if (valorTres > maiorValor){
    //     maiorValor = valorTres
    // }
    // return maiorValor

    // if (valorUm >= valorDois && valorUm >= valorTres) {
    //     return valorUm
    // } else if (valorDois >= valorUm && valorDois >= valorTres){
    //     return valorDois
    // // } else if (valorTres >= valorDois && valorTres >= valorUm){
    // } else {
    //     return valorTres
    // }
    // // return
}
function descobrindoMenorValor(valorUm: number, valorDois: number, valorTres: number): number {
    let menorValor = valorDois
    if (valorUm < valorDois) {
       menorValor = valorUm
    }
    if (valorTres < menorValor){
        menorValor = valorTres
    }
    return menorValor

    // if (valorUm <= valorDois && valorUm <= valorTres) {
    //     return valorUm
    // } else if (valorDois <= valorUm && valorDois <= valorTres){
    //     return valorDois
    // // } else if (valorTres <= valorDois && valorTres <= valorUm){
    // } else {
    //     return valorTres
    // }
    // // return
}
function descobrindoValorDoMeio(valorUm: number, valorDois: number, valorTres: number, valorMenor: number, valorMaior: number): number {
    if ((valorUm === valorMaior && valorDois === valorMenor) || (valorUm === valorMenor && valorDois === valorMaior)) {
        return valorTres
    }
    if ((valorUm === valorMaior && valorTres === valorMenor) || (valorUm === valorMenor && valorTres === valorMaior)) {
        return valorDois
    }
    return valorUm
}

function colocandoEmOrdemCrescente (valorUm: number, valorDois: number, valorTres: number): { menor: number, meio: number, maior: number } {
    let obj;

    obj = trocarValor(valorUm, valorDois);
    valorUm = obj.valorUm
    valorDois = obj.valorDois;

    obj = trocarValor(valorDois, valorTres);
    valorDois = obj.valorUm
    valorTres = obj.valorDois;

    obj = trocarValor(valorUm, valorDois);
    valorUm = obj.valorUm
    valorDois = obj.valorDois;

    return {
        menor: valorUm,
        meio: valorDois,
        maior: valorTres,
    }
}

function trocarValor(valorUm: number, valorDois: number): { valorUm: number, valorDois: number } {
    if (valorDois < valorUm){
        let inf = valorDois
        valorDois = valorUm
        valorUm = inf
    }
    return {valorUm, valorDois}
}

main()