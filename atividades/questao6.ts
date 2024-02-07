import {questionNumber} from "./utils";

async function main() {
    console.log('Vamos calcular o seu INSS?')
    let salarioBruto: number = await questionNumber('Qual é o seu salário bruto? ')
    const al1:number = 0.075
    const al2:number = 0.9
    const al3:number = 0.12
    const al4:number = 0.14
    const sc0:number = 1319.00
    const sc1:number = 1320.00
    const sc2:number = 2571.29
    const sc3:number = 3856.94
    const sc4:number = 7507.49

    if (salarioBruto <= sc0) {
        let soma0:number = sc1 * al1 + salarioBruto * al2 - sc1 * al2
        const salarioMenosInss1:number = salarioBruto - soma0
        console.log(`O valor do seu inss é equivalente a: R$ ${soma0.toFixed(2)}.`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss1.toFixed(2)}`)

    } else if (salarioBruto <= sc1) {
        let soma1:number = sc1 * al1 + sc2 * al2 - sc1 * al2 + salarioBruto * al3 - sc2 * al3
        const salarioMenosInss2:number = salarioBruto - soma1
        console.log(`O valor do seu inss é equivalente a: R$ ${soma1.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss2.toFixed(2)}`)

    } else if (salarioBruto <= sc2) {
        let soma3:number = sc1 * al1 + sc2 * al2 - sc1 * al2 + sc3 * al3 - sc2 * al3 + salarioBruto * al4 - sc3 * al4
        const salarioMenosInss3:number = salarioBruto - soma3
        console.log(`O valor do seu inss é equivalente a: R$ ${soma3.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss3.toFixed(2)}`)

    } else if (salarioBruto <= sc3) {
        let soma4:number = sc1 * al1 + sc2 * al2 - sc1 * al2 + sc3 * al3 - sc2 * al3 + sc4 * al4 - salarioBruto * al4
        const salarioMenosInss4:number = salarioBruto - soma4
        console.log(`O valor do seu inss é equivalente a: R$ ${soma4.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss4.toFixed(2)}`)

    } else if (salarioBruto > sc4) {
        const soma5:number = 908
        const salarioMenosInss5:number = salarioBruto - soma5
        console.log(`O valor do seu inss é equivalente a: R$ 908`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss5}`)
    }
}
main()
