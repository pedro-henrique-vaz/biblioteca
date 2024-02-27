import {questionNumber} from "./utils"

async function main() {
    console.log('Digite dois valores abaixo:')
    let valorUm: number = await questionNumber('Primeiro Valor: ')
    let valorDois: number = await questionNumber('Segundo Valor: ')
    let ambosValores: number = escolhendoMaiorNumero(valorUm, valorDois)
    if (ambosValores === 1){
        console.log(`O numero ${valorUm} é maior que ${valorDois}.`)
    } else if (ambosValores === -1){
        console.log(`O numero ${valorDois} é maior que ${valorUm}.`)
    } else {
        console.log(`Ambos numeros ${valorUm} são iguais.`)
    }
}
function escolhendoMaiorNumero (valorUm:number, valorDois:number): number {
    if (valorUm > valorDois) {
        return 1
    } else if (valorDois > valorUm) {
        return -1
    } else if (valorUm === valorDois) {
        return 0
    }
}
main()