async function main() {
    let primeiroArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let parametrosFunction = addingTheValues(primeiroArr)
    console.log(parametrosFunction)
}
function addingTheValues(arrayPrimario: number[]): number {
    let arraySecundario: number = 0
    for(let i: number = 0; i < arrayPrimario.length; i++){
        arraySecundario += arrayPrimario[i]
    }
    return arraySecundario
}
main()