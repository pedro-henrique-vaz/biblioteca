interface Livro {
    nome: string
    autor: string
}
interface Biblioteca {
    livros: Livro[]
}

async function main(){
    let biblioteca = criarBiblioteca()
    let livro1: Livro = criarLivro('Ilíada e Odisséisa', 'Homero')
    let livro2: Livro = criarLivro('Guerra e Paz', 'Liev Tosltói')
    let livro3: Livro = criarLivro('Orgulho e Preconceito', 'Jane Austen')
    let livro4: Livro = criarLivro('Cem Anos de Solidão', 'Gabriel Garcia Marques')
    let livro5: Livro = criarLivro('Dom Quixote', 'Miguel de Cervantes')

    // biblioteca.livros = []
    adicionarLivroNaBiblioteca(biblioteca, livro1)
    adicionarLivroNaBiblioteca(biblioteca, livro1)
    // biblioteca.livros = [livro1]

    adicionarLivroNaBiblioteca(biblioteca, livro2)
    adicionarLivroNaBiblioteca(biblioteca, livro2)
    // biblioteca.livros = [livro1, livro2]

    adicionarLivroNaBiblioteca(biblioteca, livro3)
    // biblioteca.livros = [livro1, livro2, livro3]

    adicionarLivroNaBiblioteca(biblioteca, livro4)
    // biblioteca.livros = [livro1, livro2, livro3, livro4]

    adicionarLivroNaBiblioteca(biblioteca, livro5)
    // biblioteca.livros = [livro1, livro2, livro3, livro4, livro5]

    listagemDosLivros(biblioteca)
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
main()