async function main() {
    let primeiroArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let somandoValoresDoArray: number = reduce(primeiroArr,(el0: number, somaTotal: number): number => {
        return el0 + somaTotal
    })
    console.log(somandoValoresDoArray)

    let multiplicandoValoresDoArray: number = reduce(primeiroArr,(el0: number, somaTotal: number): number => {
        return el0 * somaTotal
    })
    console.log(multiplicandoValoresDoArray)

    const soma = primeiroArr.reduce((somaTotal: number, el: number): number => {
        return el + somaTotal;
    })
    console.log(soma)
}

function reduce(primeiroArr: number[], extractFn: (el0: number, somaTotal: number) => number, valorInicial:number = undefined): number {
    let somaTotal: number = valorInicial;
    let i: number = 0;

    if (valorInicial === undefined) {
        somaTotal = primeiroArr[0]
        i = 1
    }

    for (; i < primeiroArr.length; i++) {
        somaTotal = extractFn(primeiroArr[i], somaTotal)
    }
    return somaTotal
}
main()
