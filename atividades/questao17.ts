// @ts-ignore
async function main(){
    let numerosDoArr: number[] = [32, 5, 67, 87, 23, 4, 1, 54, 88, 98,]
    let parametros1 = encontrandoMaiorValor(numerosDoArr)
    console.log(parametros1)
}
function encontrandoMaiorValor (numerosDoArr: number[]) {
    let maior:number = numerosDoArr[0]
    let menor:number = numerosDoArr[0]
    for(const num of numerosDoArr){
        if(num > maior){
            maior = num
        }
        if(num < menor){
            menor = num
        }
    }
    return {maior, menor}
}
main()