// ==> Exemplo 01 - while

let contagem = 0

while (contagem < 5) {
    console.log(contagem)
    contagem++
}

// ==> Exemplo 02

let numeral = 1

while (numeral <= 20) {
    if (numeral % 5 == 0) {
        console.log('O primeiro número múltiplo de 5 entre 1 a 20 é...: ', numeral)
        break
    }
    numeral++
}

// ==> Exemplo 03 - exemplo mais prático

let contadorUsuario = 0
const usuarios : string[] = ['Pedro', 'Sergio', 'Jupiter']

while (usuarios[contadorUsuario]) {

    console.log('Usuário:', usuarios[contadorUsuario])
    contadorUsuario++
}

// ==> Exemplo 04 - do...while

let contador_01 = 0

do {
    console.log(contador_01)
    contador_01++
} while (contador_01 < 5)