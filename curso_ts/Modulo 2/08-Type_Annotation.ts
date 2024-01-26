// ==> Variáveis [Type Annotations]
let nome: string = 'Pedro Henrique'
console.log(nome)

// ==> Arrays (lista) [Type Annotations]
let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Zebra', 'Girafa']
console.log(animais)

// ==> Objetos [Type Annotations]
let carro: {
    nome: string
    ano: number
    preco: number
}

carro = { nome: 'Honda Civic', ano: 2024, preco: 180000 }
console.log(carro)

// ==> Functions [Type Annotation]
function multiplicarNumero(num1: number, num2: number): number {
    return num1 * num2
}

console.log(
    multiplicarNumero(7, 90),
    multiplicarNumero(2, 5),
    multiplicarNumero(3, 10),
)
