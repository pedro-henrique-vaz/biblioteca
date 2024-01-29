// ==> Exemplo 01: Never - Throw Exception

function error(message: string): never {
    throw new Error(message)
}

console.log(error('Erro de Mensagem - 01'))

// ==> Exemplo 02: Never inferido automaticamente
function rejectMessage() {
    return error('Error de Mensagem - 02')
}

console.log(rejectMessage())

// ==> Exemplo 03 - Função que contém loop infinito retorna o tipo 'never'

const loopInfinito = function loop() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
        console.log('Oi, Developers!')
    }
}

// console.log(loopInfinito())

// ==> Exemplo 04: Diferença entre os tipos: 'never' x 'void'

const algumaCoisaVoid: void = null

// ==> dará erro! (// Error: Type 'null' is not assignable to type 'never')
// const algumaCoisaNever: never = null

//console.log(algumaCoisaVoid)
//console.log(algumaCoisaNever)

function criarPessoa(nome: string, idade: number): {nome: string, idade: number} {
    if (nome.length === 0) {
        throw new Error("nome não pode ser vazio")
    }
    if (idade < 0) {
        throw new Error("idade não pode ser menor que 0 anos")
    }
    if (idade >= 150) {
        throw new Error("idade não pode ser maior ou igual a 150 anos")
    }

    return {nome: nome, idade: idade}
}

try {
    console.log(criarPessoa("Sérgio", 32))
    console.log(criarPessoa("Sérgio", 150))
} catch (err: any) {
    console.log(err.message)
}
