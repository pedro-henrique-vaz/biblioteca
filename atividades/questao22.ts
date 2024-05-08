interface Livro {
    nome: string
    autor: string
}
interface Biblioteca {
    livros: Livro[]
}
async function main(){
    let biblioteca1 = criarBiblioteca()
    let livro1: Livro = criarLivro('Ilíada e Odisséisa', 'Homero')
    let livro2: Livro = criarLivro('Guerra e Paz', 'Liev Tosltói')
    let livro3: Livro = criarLivro('Orgulho e Preconceito', 'Jane Austen')
    let livro4: Livro = criarLivro('Cem Anos de Solidão', 'Gabriel Garcia Marques')
    let livro5: Livro = criarLivro('Dom Quixote', 'Miguel de Cervantes')
    let livro6: Livro = criarLivro('Harry Potter', 'J.K')
    let livro7: Livro = criarLivro('Game of Thrones', 'Martin')
    let livro8: Livro = criarLivro('Lord of the Rings', 'Tolkien')

    adicionarLivroNaBiblioteca(biblioteca1, livro1)
    adicionarLivroNaBiblioteca(biblioteca1, livro2)
    adicionarLivroNaBiblioteca(biblioteca1, livro3)
    adicionarLivroNaBiblioteca(biblioteca1, livro4)
    adicionarLivroNaBiblioteca(biblioteca1, livro5)
    adicionarLivroNaBiblioteca(biblioteca1, livro6)
    adicionarLivroNaBiblioteca(biblioteca1, livro7)
    adicionarLivroNaBiblioteca(biblioteca1, livro8)

    let livroEmprestado1 = emprestarLivro(biblioteca1, 'Ilíada e Odisséisa', 5)
    let livroEmprestado2 = emprestarLivro(biblioteca1, 'Lord of the Rings', 2)
    listagemDosLivros(biblioteca1)
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
function listagemDosLivros(checagem: Biblioteca) {
    console.log("Livros Disponiveis: ")
    checagem.livros.forEach((el: Livro) => {
        console.log(`Nome - ${el.nome};  Autor - ${el.autor}`)
    })
}
function emprestarLivro(lista: Biblioteca, emprestimo: string, diasEmprestado: number) {
    for (let i: number = 0; i < lista.livros.length; i++) {
        let el: Livro = lista.livros[i]
        if (emprestimo === el.nome) {
            lista.livros.splice(i, 1)
            return el
        }
    }
    return undefined
}
function readicionandoLivro (emprestar: Biblioteca, livro: Livro){
    emprestar.livros.push(livro)

}
main()