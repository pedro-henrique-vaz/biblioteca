const arr:number[] = [1, 2, 3]
inversaoDeValores(arr);
function inversaoDeValores(arr:number[]) {
    let aux: number = arr[0]
    arr[0] = arr[1]
    arr[1] = aux
    arr[1] = arr[2]
    arr[2] = aux
}
console.log(arr)
