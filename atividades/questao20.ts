async function main() {
    let arrayPrimario: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

    let valoresDobrados: number[] = transform(arrayPrimario, (el: number):number=> {
        return el * 2
    })

    console.log(valoresDobrados)

    let valoresTriplicados: number[] = transform(arrayPrimario, (el: number):number=> {
        return el * 3
    })
    console.log(valoresTriplicados)

    let valoresPelaMetade: number[] = transform(arrayPrimario, (el: number):number=> {
        return el / 2
    })
    console.log(valoresPelaMetade)

    console.log(arrayPrimario.map(n => n % 2 !== 0));
    console.log(arrayPrimario.map(n => n % 2));
}

function transform(arrayPrimario: number[], transformFn: (el:number)=> number): number[] {
    let arraySecundario: number[] = []
    for(let i:number = 0; i < arrayPrimario.length; i++){
         arraySecundario.push(transformFn(arrayPrimario[i]))
        }
    return arraySecundario
}
main()
