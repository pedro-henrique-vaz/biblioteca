import {questionNumber, questionStr} from "./utils"

async function main(){

    let receberNumero:number = await questionNumber('Digite um número a seguir: ')
    console.log('Agora iremos verificar se o número digitado e positivo ou negativo.')

    // const verificacao1:number = Math.sign(receberNumero)

    if (receberNumero >= 0){
        console.log('O numero digitado é positivo.')
    } else {
        console.log('O numero digitado é negativo.')
    }
}
main()