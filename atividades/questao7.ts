import {questionNumber, questionStr} from "./utils"

async function main() {
    console.log('Calculadora de Juros Compostos')

    let capitalInvestido: number = await questionNumber('Qual é o seu capital inicial para ser investido? ')
    let aporteMensal: number = await questionNumber('Qual é o seu aporte mensal? ')
    let periodo: number = await questionNumber('Por quantos meses? ')
    let juroAplicado: number = await questionNumber('Qual é a taxa(porcentagem) para ser aplicada? ')

    var montante: any = calcularJuro(capitalInvestido, periodo, juroAplicado)
    var aporte: any = calcularAporte(aporteMensal, periodo, juroAplicado)
    var montanteTotal:number = montante + aporte
    var valorDeGanhos:number = montante - capitalInvestido

    console.log(`Voçẽ teve um valor de investimento no total de: ${capitalInvestido.toFixed(2)}`)
    console.log(`Voçẽ teve um valor de ganhos no total de: ${valorDeGanhos.toFixed(2)}`)
    console.log(`O valor final recebido será de: ${montanteTotal.toFixed(2)}`)
}

function calcularJuro(capitalInvestido:number, periodo:number, juroAplicado:number): number{
    const porcentagem:number = juroAplicado / 100

   return capitalInvestido * (1 + porcentagem) ** periodo
}
function calcularAporte(aporteMensal:number, periodo:number, juros:number): number{
    let montante:number = 0
    for(let i:number = 0; i < periodo; i++) {
        montante = montante + calcularJuro(aporteMensal, i, juros)
    }
    return montante
}
main()
