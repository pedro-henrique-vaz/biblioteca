import {questionNumber} from "./utils";

async function main() {
    console.log('Vamos calcular o seu INSS?')
    let salarioBruto: number = await questionNumber('Qual é o seu salário bruto? ')

    function calcularInss(salarioBruto: number): number {
        const al1: number = 0.075
        const al2: number = 0.09
        const al3: number = 0.12
        const al4: number = 0.14
        const sc1: number = 1320.00
        const sc2: number = 2571.29
        const sc3: number = 3856.94
        const sc4: number = 7507.49
        let inss: number

        if (salarioBruto <= sc1) {
            inss = salarioBruto * al1
        } else if (salarioBruto <= sc2) {
            inss = (sc1 * al1) + (salarioBruto * al2) - (sc1 * al2)
        } else if (salarioBruto <= sc3) {
            inss = sc1 * al1 + sc2 * al2 - sc1 * al2 + salarioBruto * al3 - sc2 * al3
        } else if (salarioBruto <= sc4) {
            inss = (sc1 * al1) + (sc2 * al2) - (sc1 * al2) + (sc3 * al3) - (sc2 * al3) + (salarioBruto * al4) - (sc3 * al4)
        } else {
            inss = (sc1 * al1) + (sc2 * al2) - (sc1 * al2) + (sc3 * al3) - (sc2 * al3) + (sc4 * al4) - (sc3 * al4)
        }
        return inss;
    }
    const inss:number = calcularInss (salarioBruto)
    const salarioMenosInss: number = salarioBruto - inss
    console.log(`O valor do seu INSS é equivalente a: R$ ${inss.toFixed(2)}`)
    console.log(`O valor do seu salário líquido é de: R$ ${salarioMenosInss.toFixed(2)}`)
}
main()
