async function main() {
    let arrayPrimario:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    let passandoOsParametrosDaFuncao:number[] = dobrandoValoresDoArray(arrayPrimario,  (el:number)=> )
    console.log('Array com numeros normais: ' + arrayPrimario)
    console.log('Array com numeros dobrados: ' + passandoOsParametrosDaFuncao)
}






function dobrandoValoresDoArray(arrayPrimario:number[],  filterFn: (el:number)=> number): number[] {
    let arraySecundario: number [] = []
    for (let i: number = 0; i < arrayPrimario.length; i++) {
        arraySecundario.push(arrayPrimario[i])
    }
    return arraySecundario
}
main()