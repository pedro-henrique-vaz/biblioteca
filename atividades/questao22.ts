import {questionNumber, questionStr} from "./utils"
interface Livro {
    nome: string
    autor: string
}
interface Biblioteca {
    livros: Livro[]
}

async function main(){
    let biblioteca1 = criarBiblioteca()
    let biblioteca2 = criarBiblioteca()
    let livro1: Livro = criarLivro('Ilíada e Odisséisa', 'Homero')
    let livro2: Livro = criarLivro('Guerra e Paz', 'Liev Tosltói')
    let livro3: Livro = criarLivro('Orgulho e Preconceito', 'Jane Austen')
    let livro4: Livro = criarLivro('Cem Anos de Solidão', 'Gabriel Garcia Marques')
    let livro5: Livro = criarLivro('Dom Quixote', 'Miguel de Cervantes')
    let livro6: Livro = criarLivro('Harry Potter', 'J.K')
    let livro7: Livro = criarLivro('Game of Thrones', 'Martin')
    let livro8: Livro = criarLivro('Lord of the Rings', 'Tolkien')

    // biblioteca1.livros = []
    adicionarLivroNaBiblioteca(biblioteca1, livro1)
    adicionarLivroNaBiblioteca(biblioteca1, livro1)
    // biblioteca1.livros = [livro1]

    adicionarLivroNaBiblioteca(biblioteca1, livro2)
    adicionarLivroNaBiblioteca(biblioteca1, livro2)
    // biblioteca1.livros = [livro1, livro2]

    adicionarLivroNaBiblioteca(biblioteca1, livro3)
    // biblioteca1.livros = [livro1, livro2, livro3]

    adicionarLivroNaBiblioteca(biblioteca1, livro4)
    adicionarLivroNaBiblioteca(biblioteca2, livro4)
    // biblioteca1.livros = [livro1, livro2, livro3, livro4]

    adicionarLivroNaBiblioteca(biblioteca1, livro5)
    adicionarLivroNaBiblioteca(biblioteca2, livro5)
    // biblioteca1.livros = [livro1, livro2, livro3, livro4, livro5]

    adicionarLivroNaBiblioteca(biblioteca2, livro6)
    adicionarLivroNaBiblioteca(biblioteca2, livro7)
    adicionarLivroNaBiblioteca(biblioteca2, livro8)

    // listagemDosLivros(biblioteca1)
    let livroEmprestado1 = emprestarLivro(biblioteca1, 'Guerra e Paz')
    let livroEmprestado2 = emprestarLivro(biblioteca1, 'Game of Thrones')
    let livroEmprestado3 = emprestarLivro(biblioteca2, 'Harry Potter')
    let livroEmprestado4 = emprestarLivro(biblioteca2, 'Orgulho e Preconceito')
    // console.log(livroEmprestado1)
    listagemDosLivros(biblioteca1)
    listagemDosLivros(biblioteca2)
}
function listagemDosLivros(checagem: Biblioteca) {
    console.log("Livros Disponiveis: ")
    checagem.livros.forEach((el: Livro) => {
        console.log(`Nome - ${el.nome};  Autor - ${el.autor}`)
    })
}
function criarLivro(nome: string, autor: string): Livro {
    return {
        nome: nome,
        autor: autor,
    }
}
function criarBiblioteca(): Biblioteca {
    return {
        livros: []
    }
}
function adicionarLivroNaBiblioteca(biblioteca: Biblioteca, livro: Livro){
    for(let i: number = 0; i < biblioteca.livros.length; i++) {
        let l = biblioteca.livros[i]
        if(l.autor === livro.autor && l.nome === livro.nome){
            return
        }
    }
    biblioteca.livros.push(livro)
}
function emprestarLivro(lista: Biblioteca, emprestimo: string) {
    for (let i: number = 0; i < lista.livros.length; i++) {
        let el: Livro = lista.livros[i]
        if (emprestimo === el.nome) {
            lista.livros.splice(i, 1)
            return el
        }
    }
    return undefined
}
main()