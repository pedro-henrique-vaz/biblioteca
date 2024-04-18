async function main() {
    let primeiroArr: number[] = [1, 2, 3, 1, 2, 3, 3, 3, 4, 3, 4, 3, 4, 3, 4, 5, 6, 7, 6, 7, 8]
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

    const m = primeiroArr.reduce((result: { [key: number]: number }, el: number) : { [key: number]: number } => {
        let count = result[el];
        if (isNaN(count)) {
            count = 0;
        }
        result[el] = count + 1;
        return result;
        // {}
        // {1: 1}
        // {1: 1, 2: 1}
        // {1: 1, 2: 1, 3: 1}
        // {1: 2, 2: 1, 3: 1}
        // {1: 2, 2: 2, 3: 1}
        // {1: 2, 2: 2, 3: 2}
        // {1: 2, 2: 2, 3: 3}
        // {1: 2, 2: 2, 3: 4}
        // {1: 2, 2: 2, 3: 4, 4: 1}
    }, {})
    console.log(m);
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
