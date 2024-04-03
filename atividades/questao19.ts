import {questionNumber} from "./utils"

async function main() {
    let recebendoNum: number = await questionNumber('Digite um valor: ')

    let arr: number[] = [1, 29, 29, 29, 29, 2, 3, 3, 3, 3, 3, 4, 4, 23, 23, 23, 23, 4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 13, 13, 14, 15, 16, 17, 3, 3, 3, 18, 19, 20, 21, 22, 23, 24, 25, 15, 15, 15, 26, 27, 28, 29, 30]

    let arrMaiorQueNum = filter(arr, (el:number):boolean => {
        return el > recebendoNum;
    })
    console.log(arrMaiorQueNum)

    let arrMenorQueNum = filter(arr, (el:number):boolean => {
        return el < recebendoNum;
    })
    console.log(arrMenorQueNum)

    let arrPares = filter(arrMaiorQueNum, (al:number):boolean => {
        return al % 2 === 0;  // 0 = par(===) | 1 = impar (!==)
    })
    console.log(arrPares)

    let arrImpares = filter(arrMenorQueNum, (al:number):boolean => {
        return al % 2 !== 0;  // 0 = par(===) | 1 = impar (!==)
    })
    console.log(arrImpares)
}
function filter(arr: number[], filterFn: (el:number)=> boolean): number[] {
    let armazenamento: number[] = []
    for(let i:number = 0; i < arr.length; i++){
        if(filterFn(arr[i])){
            armazenamento.push(arr[i])
        }
    }
    return armazenamento
}

main()