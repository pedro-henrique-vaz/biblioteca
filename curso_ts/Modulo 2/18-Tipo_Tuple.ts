// ==> Exemplo 01 - Uso simples de Tuplas em TypeScript

// let pessoa: [string, string, number] = ['Pedro Vaz', 'Estudante', 17]; // pessoa = [17, 'Estudante', 'Pedro Vaz']
console.log(pessoa)

// ==> Exemplo 02 - Acessando o valor da Tupla

let doisTipos: string | undefined;

let pessoa1: [string, string, number]
pessoa1 = ['Pedro Vaz', 'Estudante', 17]

console.log(pessoa1[1])

// ==> Exemplo 03 - Outra forma de usar Tuplas em TypeScrit (com labels)

let pessoa2: [nome: string, posicao: string, idade: number] = ['Pedro Vaz', 'Estudante', 17]

console.log(pessoa2)


// ==> Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭']
console.log(...listaFrutas)

//==> Exemplo 05 - Lista Heterogênea de Tupla:

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas]
console.log(listaFrutas2)

// ==> Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades]
}

let resultado = listarPessoas(['Pedro', 'Sergio'], [17, 29])
console.log(resultado)

// ==> Exemplo 07 - Labeled Tuples com Spread Operator numa função

type Nome =
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa(...nome: Nome) {
    return [...nome]
}

console.log(criarPessoa('Pedro', 'Vaz'))
console.log(criarPessoa('Pedro', 'Henrique', 'Vaz'))