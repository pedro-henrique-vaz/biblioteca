import {questionNumber} from "./utils";

async function main() {
    console.log('Vamos calcular o seu INSS?')
    let salarioBruto: number = await questionNumber('Qual é o seu salário bruto? ')
    // let inss1:number = salarioBruto * 0.075 ;
    // let inss2:number = salarioBruto * 0.09 - 21.18 ;
    // let inss3:number = salarioBruto * 0.12 - 101.18 ;
    // let inss4:number = salarioBruto * 0.14 - 181.18
    // // let inss2:number = salarioBruto * 0.09 - 19.80 ;
    // // let inss3:number = salarioBruto * 0.12 - 96.94 ;
    // // let inss4:number = salarioBruto * 0.14 - 174.08;
    // let salarioMenosInss1:number = salarioBruto - inss1 ;
    // let salarioMenosInss2:number = salarioBruto - inss2 ;
    // let salarioMenosInss3:number = salarioBruto - inss3 ;
    // let salarioMenosInss4:number = salarioBruto - inss4 ;
    // let salarioMenosInss5:number = salarioBruto - 908

    let inss1:number =






    if (salarioBruto <= 1412) {
        console.log(`O valor do seu inss é equivalente a: R$ ${inss1.toFixed(2)}.`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss1.toFixed(2)}`)
    } else if (salarioBruto > 1412.01 && salarioBruto < 2666.68) {
        console.log(`O valor do seu inss é equivalente a: R$ ${inss2.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss2.toFixed(2)}`)
    } else if (salarioBruto > 2666.69 && salarioBruto < 4000.03) {
        console.log(`O valor do seu inss é equivalente a: R$ ${inss3.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss3.toFixed(2)}`)
    } else if (salarioBruto > 4000.04 && salarioBruto < 7786.02) {
        console.log(`O valor do seu inss é equivalente a: R$ ${inss4.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss4.toFixed(2)}`)
    } else if (salarioBruto >= 7786.03) {
        console.log(`O valor do seu inss é equivalente a: R$ 908`)
        console.log(`O valor do seu salario liquido e de: R$ ${salarioMenosInss5}`)
    }
}
main()
