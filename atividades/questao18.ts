import {questionNumber} from "./utils"

async function main() {
    let recebendoNum: number = await questionNumber('Digite um valor: ')
    let parametrosFunc1 = conferindoNumDentroDoArr(recebendoNum)
    console.log(parametrosFunc1)
}

function conferindoNumDentroDoArr (recebendoNum: number) {
    let arr1: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    for(const num1 of arr1){
        if(num1 === recebendoNum){
            return'O numero digitado esta dentro do array.'
        }
    }
    return'O numero digitado nao esta dentro do array.'
}
main()