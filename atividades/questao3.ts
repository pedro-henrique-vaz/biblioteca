import {questionNumber, questionStr} from "./utils";

async function main() {
    console.log('Olá, responda as perguntas seguintes:')
    let base: number = await questionNumber('Qual a base do retangulo em cm?')
    let altura: number = await questionNumber('Qual a altura do retangulo em cm?')

    var resultado = base * altura

    console.log(`A área do retangulo em cm² é: ${resultado}`)
}
main()
