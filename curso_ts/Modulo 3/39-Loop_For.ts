// ==> Exemplo 01: loop for

for (let i :number = 0; i < 10; i++ ){
    console.log('Oi Dev')
}
// for (let i :number = 0; i < 500; i-- ){
//     console.log('Oi Dev')
// }


// ==> Exemplo 02: for ...of - (retorna uma coleção de matriz, lista ou tupla)

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (const a of numeros) {
    console.log(a)
}


// ==> Exemplo 03: for ...in - (retorna uma coleção de matriz, lista ou tupla)

const numeros1 = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
for(const b in numeros1) {
    console.log(b)
}

// sort()
const ordemNumerica:number[] = numeros1.sort()
console.log(ordemNumerica)