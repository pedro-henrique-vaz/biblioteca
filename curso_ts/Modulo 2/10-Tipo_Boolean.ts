// ==> Exemplo 01

let tarefaConcluida = () => {
    console.log("tarefaConcluida")
    return true
}
let tarefaPendente = () => {
    console.log("tarefaPendente")
    return false
}

console.log(tarefaConcluida())
console.log(tarefaPendente())

// ==> Exemplo 02

let concluido: boolean = false

if (concluido && tarefaConcluida() || tarefaPendente()) {
    console.log('Tarefa foi concluída com sucesso!')
} else {
    console.log('Tarefa Pendente!')
}

let numero: number = 10

if (numero > 100) {
    console.log("maior que 100")
} else if (numero > 5) {
    console.log("maior que 5")
} else if (numero === 10) {
    console.log("igual a 10")
} else if (numero > 5 && numero < 10) {
    console.log("maior que 5 e menor que 10")
} else if (numero > 5 || numero < 10) {
    console.log("maior que 5 ou menor que 10")
} else {
    console.log("não sei")
}