import {questionNumber, questionStr} from "./utils"

async function main(){

    let receberNumero:number = await questionNumber('Digite um número a seguir: ')
    console.log('Agora iremos verificar se o número digitado e maior ou menor que 10.')

    if (receberNumero > 10) {
        console.log('Este número é maior que 10.')
    } else {
        console.log('Este número não é maior que 10.')
    }
}
main()