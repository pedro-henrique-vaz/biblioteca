async function main() {
    let primeiroArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let somandoValoresDoArray = addingTheValues(primeiroArr, (el0: number, el1: number): number => {
        return el0 + el1
    })
    console.log(somandoValoresDoArray)
}
function addingTheValues(primeiroArr: number[], extractFn: (el0:number, el1:number)=> number): number {
    let arraySecundario: number = 0
    for(let i: number = 0; i < primeiroArr.length; i++) {
        if (extractFn(primeiroArr[i], i)) {
           
        }
    }
}
main()