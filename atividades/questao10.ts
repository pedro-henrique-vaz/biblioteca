import {questionNumber} from "./utils"

async function main(){

    console.log('Hortifruti da familia Vaz')
    console.log('1 Maçã está saindo a R$1.30, mas, levando apartir de uma duzia, sairá por R$1.10!')
    let receberMacas: number = await questionNumber('Quantas maçãs voçê vai querer hoje? ')
    let valorFinal: any  = carrinhoDeCompras(receberMacas)

    console.log(`Como voçẽ comprou ${receberMacas} maçãs. O valor que deverá ser pago é: ${valorFinal.toFixed(2)} `)
}

function carrinhoDeCompras (receberMacas:number): number {
    if (receberMacas <= 12) {
        return receberMacas * 1.30
    }
    return receberMacas * 1.10
}
main()