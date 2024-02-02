import {questionNumber} from "./utils";

async function main() {
    console.log('Olá, vamos descobrir quantos dias se passaram desde o seu nascimento.')
    let ano:number = await questionNumber('Quantos anos voçẽ tem? ')
    let mes:number = await questionNumber('Quantos meses voçẽ tem? ')
    let dias:number = await questionNumber('Quantos dias voçẽ tem? ')
    var converter1 = 365 * ano
    var converter2 = 30 * mes
    var converter3 = dias
    var somaTotal = converter1 + converter2 + converter3
    console.log(`Voce tem ${somaTotal} dias`)
}
main()