async function main() {
    let primeiroArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let somandoValoresDoArray: number = addingTheValues(primeiroArr,(el0: number, somaTotal: number): number => {
        return el0 + somaTotal
    }, 0)
    console.log(somandoValoresDoArray)

    let multiplicandoValoresDoArray: number = addingTheValues(primeiroArr,(el0: number, somaTotal: number): number => {
        return el0 * somaTotal
    }, 1)
    console.log(multiplicandoValoresDoArray)
}

function addingTheValues(primeiroArr: number[], extractFn: (el0: number, somaTotal: number) => number, valorInicial:number): number {
    let somaTotal: number = valorInicial
    for (let i: number = 1; i < primeiroArr.length; i++) {
        somaTotal = extractFn(primeiroArr[i], somaTotal)
    }
    return somaTotal
}
main()