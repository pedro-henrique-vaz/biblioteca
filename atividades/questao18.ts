import {questionNumber} from "./utils"

async function main() {
    let recebendoNum: number = await questionNumber('Digite um valor: ')
    let arr: number[] = [1, 2, 3, 4, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    let index = find(arr, recebendoNum)
    if(index !== -1){
        console.log(`O valor foi encontrado no indice ${index}.`)
    } else {
        console.log('O valor nao foi encontrado.')
    }
}

function find(arr: number[], recebendoNum: number): number {
    for (const [index, valor] of arr.entries()) {
        if (recebendoNum === valor) {
            return index
        }
    }
    return -1
}
main()