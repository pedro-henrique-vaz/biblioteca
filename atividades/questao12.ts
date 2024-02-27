import {questionNumber} from "./utils"

async function main() {
    let valorUm: number = await questionNumber('Primeiro valor: ')
    let valorDois: number = await questionNumber('Segundo valor: ')
    let valorTres: number = await questionNumber('Terceiro valor: ')
    let ordenando: number = colocandoEmOrdem(valorUm, valorDois, valorTres)

}
function colocandoEmOrdem (valorUm: number, valorDois: number, valorTres: number): number {
    if (valorUm < valorDois && valorTres) {
        return valorUm
    } else if (valorDois < valorUm && valorTres) {
        return valorDois
    } else if (valorTres < valorUm && valorDois) {
        return valorTres
    }

}
main()


// ==> Bubble Sort
// function bubbleSort(valorTotal: number[]) {
//     const numeros = valorTotal.length
//     for (let i: number = 0; i < numeros - 1; i++) {
//         for (let j: number = 0; j < numeros - 1 - i; j++) {
//             if (valorTotal[j] > valorTotal[j + 1]) {
//                 const armazemTemp = valorTotal[j]
//                 valorTotal[j] = valorTotal[j + 1]
//                 valorTotal[j + 1] = armazemTemp
//             }
//         }
//     }
//     return valorTotal
// }