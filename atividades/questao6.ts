import {questionNumber} from "./utils";

async function main() {
    console.log('Vamos calcular o seu INSS e seu IRRF?')

    let salarioBruto: number = await questionNumber('Qual é o seu salário bruto? ')
    let dependentes: number = await questionNumber ('Quantos dependentes vocẽ tem? ')

    var inss: number = calcularInss(salarioBruto)
    var irrf: number = calcularIRRF(salarioBruto, inss, dependentes)

    var salarioLiquido:number = salarioBruto - irrf - inss
    var somaDeImposto:number = inss + irrf

    console.log(`O valor do seu INSS é equivalente a: R$ ${inss.toFixed(2)}`)
    console.log(`O valor do seu IRRF é equivalente a: R$ ${irrf.toFixed(2)}`)
    console.log(`O valor do seu salário líquido após as operações é de: R$ ${salarioLiquido.toFixed(2)}`)
    console.log(`O valor total de imposto pago é de: R$ ${somaDeImposto.toFixed(2)}`)
}

function calcularInss(salarioBruto: number): number {
    const aliquotaINSS1: number = 0.075
    const aliquotaINSS2: number = 0.09
    const aliquotaINSS3: number = 0.12
    const aliquotaINSS4: number = 0.14
    const contribuicaoINSS1: number = 1320.00
    const contribuicaoINSS2: number = 2571.29
    const contribuicaoINSS3: number = 3856.94
    const contribuicaoINSS4: number = 7507.49

    if (salarioBruto <= contribuicaoINSS1) {
        return salarioBruto * aliquotaINSS1
    } else if (salarioBruto <= contribuicaoINSS2) {
        return (contribuicaoINSS1 * aliquotaINSS1) + (salarioBruto * aliquotaINSS2) - (contribuicaoINSS1 * aliquotaINSS2)
    } else if (salarioBruto <= contribuicaoINSS3) {
        return contribuicaoINSS1 * aliquotaINSS1 + contribuicaoINSS2 * aliquotaINSS2 - contribuicaoINSS1 * aliquotaINSS2 + salarioBruto * aliquotaINSS3 - contribuicaoINSS2 * aliquotaINSS3
    } else if (salarioBruto <= contribuicaoINSS4) {
        return (contribuicaoINSS1 * aliquotaINSS1) + (contribuicaoINSS2 * aliquotaINSS2) - (contribuicaoINSS1 * aliquotaINSS2) + (contribuicaoINSS3 * aliquotaINSS3) - (contribuicaoINSS2 * aliquotaINSS3) + (salarioBruto * aliquotaINSS4) - (contribuicaoINSS3 * aliquotaINSS4)
    } else {
        return (contribuicaoINSS1 * aliquotaINSS1) + (contribuicaoINSS2 * aliquotaINSS2) - (contribuicaoINSS1 * aliquotaINSS2) + (contribuicaoINSS3 * aliquotaINSS3) - (contribuicaoINSS2 * aliquotaINSS3) + (contribuicaoINSS4 * aliquotaINSS4) - (contribuicaoINSS3 * aliquotaINSS4)
    }
}

function calcularIRRF(salarioBruto: number, inss: number, dependentes: number): number {
    const aliquotaIRRF1: number = 0
    const aliquotaIRRF2: number = 0.075
    const aliquotaIRRF3: number = 0.15
    const aliquotaIRRF4: number = 0.225
    const aliquotaIRRF5: number = 0.275
    const contribuicaoIRRF1: number = 2112.00
    const contribuicaoIRRF2: number = 2826.65
    const contribuicaoIRRF3: number = 3751.05
    const contribuicaoIRRF4: number = 4664.68
    const deducaoIRRF1: number = 0
    const deducaoIRRF2: number = 158.40
    const deducaoIRRF3: number = 370.40
    const deducaoIRRF4: number = 651.73
    const deducaoIRRF5: number = 884.96
    const valorPorDependente: number = 189.59 * dependentes

    if (salarioBruto <= contribuicaoIRRF1) {
        return (salarioBruto - inss - valorPorDependente) * aliquotaIRRF1 - deducaoIRRF1
    } else if (salarioBruto <= contribuicaoIRRF2) {
        return (salarioBruto - inss - valorPorDependente) * aliquotaIRRF2 - deducaoIRRF2
    } else if (salarioBruto <= contribuicaoIRRF3) {
        return (salarioBruto - inss - valorPorDependente) * aliquotaIRRF3 - deducaoIRRF3
    } else if (salarioBruto <= contribuicaoIRRF4) {
        return (salarioBruto - inss - valorPorDependente) * aliquotaIRRF4 - deducaoIRRF4
    } else {
        return (salarioBruto - inss - valorPorDependente) * aliquotaIRRF5 - deducaoIRRF5
    }
}
main()