import {questionStr} from "./utils"

async function main() {
    let nome: string = await questionStr('Digite o usuario: ')
    let senha: string = await questionStr('Digite a senha: ')
    let dados: string = bancoDeDados(nome, senha)
    console.log(dados)
}
let usuarios = [
    {nome: 'Pedro', senha: '1234'},
    {nome: 'Sergio', senha: '4321'},
    {nome: 'Ravena', senha: '1020'},
    {nome: 'Jupiter', senha: '3040'},
    {nome: 'Luna', senha: '5060'}
]
function bancoDeDados (nome: string, senha: string): string {
    // let usuario;
    // for (let i:number = 0; i < usuarios.length; i++) {
    //    if (nome === usuarios[i].nome && senha === usuarios[i].senha) {
    //        usuario = usuarios[i]
    //    }
    // }

    const usuario = usuarios.find(el => el.nome === nome && el.senha === senha)

    if (usuario != undefined) {
        return 'Acesso Permitido'
    }
    return 'Acesso Negado'
}
main()