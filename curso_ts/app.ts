// const mensagem= ('olá mundo!');
// console.log(mensagem)
//
//
// let number1:number = 54
// let number2:number = 34
// let number3:number = 27
// console.log(number1 + number2 + number3)
//
//
// // ==> Variáveis [Type Annotations]
// let nome: string = 'Glaucia Lemos'
//
// if(nome === "sergio"){
//     console.log(`Olá, ${nome}`)
// } else {
//     console.log('Olá mundo')
// }

// let respostaDaMae: string = ''
// let respostaDoPai: string = ''

function helloWorld() {
    console.log("hello world")
}

function vouSairHojeV1(mae: string, pai: string){
    if(mae === 'sim' && pai === 'sim') {
        console.log('Vou sair')
    } else {
        console.log('Nao vou sair')
    }
}

function vouSairHojeV2(mae: string, pai: string){
    if(mae === 'sim' || pai === 'sim') {
        console.log('Vou sair')
    } else {
        console.log('Nao vou sair')
    }
}

vouSairHojeV1('sim', 'sim')
vouSairHojeV1('sim', 'nao')
vouSairHojeV2('sim', 'sim')
vouSairHojeV2('sim', 'nao')

//
// // ==> Arrays [Type Annotations]
// let animais: string[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa']
// console.log(animais)
//
// // ==> Objetos [Type Annotations]
// let carro: {
//   nome: string
//    ano: number
//    preco: number
// }
//
// carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000 }
// console.log(carro)
//
// // ==> Functions [Type Annotation]
// function multiplicarNumero(num1: number, num2: number) {
//    return num1 * num2
// }
//
//
// let conclusao:boolean = true
// let pendencia:boolean = false
//
//  console.log(conclusao)
//  console.log(pendencia)
//
//  let tarefa:boolean = false
//
// // if
//
//  if(!tarefa) {
//  console.log('Concluiu a tarefa')
//  } else {
//      console.log('Não concluiu a tarefa')
//   }
//
//
// // ==> Exemplos: number
//
// let num1: number = 23.0
// let num2: number = 0x78CF
// let num3: number = 0o577
// let num4: number = 0b110001
//
// console.log('Number - Ponto Flutuante...: ', num1)
// console.log('Number - Hexadecimal...: ', num2)
// console.log('Number - Octal...: ', num3)
// console.log('Number - Binário...: ', num4)
//
// // ==> Exemplos: bigint
//
// let big1: bigint = 9007199254740991n
// let big2: bigint = 0b100000000000000000000000000000000000000000000000000011n
// let big3: bigint = 0x20000000000003n
// let big4: bigint = 0o400000000000000003n
//
// console.log('Bigint...: ', big1)
// console.log('Bigint - Binário...: ', big2)
// console.log('Bigint - Hexadecimal...: ', big3)
// console.log('Bigint - Octal...: ', big4)
//
//
// let abc: string = 'pedro'
// let abcd: string = "pedro henrique"
// let abcde: string = `pedro henrique vaz`
// console.log(abc, abcd, abcde)
//
// let nomeCompleto: string = 'Glaucia Lemos'
// console.log(nomeCompleto)
//
// // ==> Exemplo 02 - Double Quotes
//
// let funcaoEmpresa: string = "Cloud Advocate em JavaScript"
// console.log(funcaoEmpresa)
//
// // ==> Exemplo 03 - Back Ticks
//
// let nomeEmpresa: string = 'Microsoft'
// let dadosFuncionario: string = `Seja bem-vinda ${nomeCompleto}! Você será ${funcaoEmpresa}
//    na empresa ${nomeEmpresa}`
// console.log(dadosFuncionario)
