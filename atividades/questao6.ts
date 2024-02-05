import {questionNumber} from "./utils";

async function main() {
    console.log('Vamos calcular o seu INSS e o seu Imposto de Renda')
    let carteira: number = await questionNumber('Quanto vocẽ recebe atualmente? ')
    let soma0:number = carteira * 0.075
    let soma1:number = carteira * 0.09
    let soma2:number = carteira * 0.12
    let soma3:number = carteira * 0.14
    let somaNova0:number = carteira - soma0
    let somaNova1:number = carteira - soma1
    let somaNova2:number = carteira - soma2
    let somaNova3:number = carteira - soma3
    let somaNova4:number = carteira - 908
    if (carteira <= 1212) {
        console.log(`O valor do seu inss é equivalente a: R$ ${soma0.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${somaNova0}`)
    } else if (carteira > 1212 && carteira < 2427) {
        console.log(`O valor do seu inss é equivalente a: R$ ${soma1.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${somaNova1}`)
    } else if (carteira > 2428 && carteira < 3641) {
        console.log(`O valor do seu inss é equivalente a: R$ ${soma2.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${somaNova2}`)
    } else if (carteira > 3642 && carteira < 7087) {
        console.log(`O valor do seu inss é equivalente a: R$ ${soma3.toFixed(2)}`)
        console.log(`O valor do seu salario liquido e de: R$ ${somaNova3}`)
    } else if (carteira >= 7088) {
        console.log(`O valor do seu inss é equivalente a: R$ 908`)
        console.log(`O valor do seu salario liquido e de: R$ ${somaNova4}`)
    }
}
main()
