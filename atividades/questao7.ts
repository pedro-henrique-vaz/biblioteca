import {questionNumber, questionStr} from "./utils"

async function main() {
    console.log('Calculadora de Juros Compostos')

    let capitalInvestido: number = await questionNumber('Qual é o seu capital inicial para ser investido? ')
    let aporteMensal: number = await questionNumber('Qual é o seu aporte mensal? ')
    let periodo: number = await questionNumber('Por quantos meses? ')
    let taxaAplicada: number = await questionNumber('Qual é a taxa(porcentagem) para ser aplicada? ')

    var juros: any = calcularJuro(capitalInvestido, aporteMensal, periodo, taxaAplicada)
    var valorDeGanhos:number = juros - capitalInvestido

    console.log(`Voçẽ teve um valor de investimento no total de: ${capitalInvestido.toFixed(2)}`)
    console.log(`Voçẽ teve um valor de ganhos no total de: ${valorDeGanhos.toFixed(2)}`)
    console.log(`O valor final recebido será de: ${juros.toFixed(2)}`)
}

function calcularJuro(capitalInvestido:number, aporteMensal:number, periodo:number, taxaAplicada:number): any{
    const porcentagem:number = taxaAplicada / 100
    const multiplicacaoAporte:number = aporteMensal * periodo

   return capitalInvestido * (1 + porcentagem) ** periodo + multiplicacaoAporte
}
main()
