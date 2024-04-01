import {questionNumber} from "./utils"

async function main() {
    let recebendoNum: number = await questionNumber('Digite um valor: ')
    let arr: number[] = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 13, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    let index = achandoNumerosIguaisAoQueUsuarioPassou(arr, recebendoNum)
        console.log(`O numero que vocẽ digitou foi ${recebendoNum}, e existem ` + index)
}
function achandoNumerosIguaisAoQueUsuarioPassou(arr: number[], recebendoNum: number): number {
    let armazenamento: number = 0
    for(let i:number = 0; i < arr.length; i++){
        if(recebendoNum == arr[i]){
            armazenamento++
        }
    }
    return armazenamento
}
main()