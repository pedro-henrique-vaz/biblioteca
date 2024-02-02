import {questionNumber} from "./utils";

async function main() {
    console.log('Olá, vamos descobrir quantos dias se passaram desde o seu nascimento.')
    let ano: number = await questionNumber('Qual o ano em que voçẽ nasceu? ')
    let mes: number = await questionNumber('Qual o mes (em numeros) em que voçẽ nasceu? ')
    let dia: number = await questionNumber('Qual o dia (em numeros) em que voçẽ nasceu? ')

    const hoje = new Date();
    const nascimento = new Date(ano, mes - 1, dia)

    var soma: number  = Math.floor((hoje.getTime() - nascimento.getTime())/(1000*60*60*24))
    console.log(`Desde o dia de seu nascimento, se passaram ${soma} dias`)
}
main()