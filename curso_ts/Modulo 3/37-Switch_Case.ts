// ==> Exemplo 01 - Switch Case

let computador = 'Acer'

switch (computador) {
    case 'Positivo' :
        console.log('Este computador e da marca Positivo')
        break
    case 'Apple' :
        console.log('Este computador e da marca Apple')
        break
    case 'Dell' :
        console.log('Este computador e da marca Dell')
        break
    case 'Acer' :
        console.log('Este computador e da marca Acer')
        break
    default:
        console.log('OPS: Por favor, selecione outra marca:')
}




// ==> Exemplo 02 - Switch Case

let diasSemanais:number = 5

switch (diasSemanais) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break

    default:
        console.log('Não é um dia útil')
}