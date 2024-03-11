import {questionNumber} from "./utils"

async function main() {
    console.log('Digite tres numeros a seguir: ')
    let num1: number = await questionNumber('Primeiro Valor: ')
    let num2: number = await questionNumber('Segundo Valor: ')
    let num3: number = await questionNumber('Terceiro Valor: ')
    let parametrosFunction: number[] = invertendoOsNumerosDoArray(num1, num2, num3)
    let ordemPadrao: number[] = [num1, num2, num3]
    console.log(ordemPadrao)
    console.log(parametrosFunction)
}
function invertendoOsNumerosDoArray (num1:number, num2:number, num3:number): number[] {
    let aux: number = num1
    num1 = num3
    num3 = aux
    return [num1, num2, num3]
}
main()