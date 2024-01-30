// ==> Exemplo 01 - Uso do if

const numeroMax = 100;
let contador = 0;

if (contador < numeroMax) {
    contador++ // oq seria esse ++
}

function fibonacci(quantidadeDeLoops: number = 500, n1: number = 1, n2: number = 1, loopAtual: number = 0): number {
    const n3 = n1 + n2;
    console.log(n3)
    if (loopAtual === quantidadeDeLoops) {
        return n3;
    }
    return fibonacci(quantidadeDeLoops, n2, n3, ++loopAtual);
}

console.log(fibonacci());

// ==> Exemplo 02 - Uso do if

const permissaoIdadeDirigir = 18;

if (permissaoIdadeDirigir >= 18) {
    console.log('Você está habilitado para dirigir!')
}

// ==> Exemplo 03 - Uso do if-else

const permissaoIdadeDirigir01 = 18;

if (permissaoIdadeDirigir01 <= 17) {
    console.log('Você está habilitado para dirigir!')
} else {
    console.log('Você não está habilitado para dirigir!')
}

//==> Exemplo 04 - if... else if

let desconto: number;

let valorCompra = 14;

if (valorCompra > 0 && valorCompra <= 5) {
    desconto = 5;
} else if (valorCompra > 5 && valorCompra <= 10) {
    desconto = 10;
} else {
    desconto = 15;
}

console.log(`Você teve um desconto de...: ${desconto}% desconto`);

// ==> Exemplo 05 - Ternário (? :) - if...else

/*const idadeVotacao = 18;

if (idadeVotacao >= 18) {
  console.log('Você é elegível para votar.')
} else {
  console.log('Você não é elegível para votar.')
}*/

// ==> Ternário
const idadeVotacao = 16;

const podeVotar = (idadeVotacao >= 18) ? 'Você é elegível para votar.' : 'Você não é elegível para votar.'

console.log(podeVotar)