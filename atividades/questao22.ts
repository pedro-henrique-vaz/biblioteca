interface Livro {
    nome: string
    autor: string
}
interface Biblioteca {
    livros: Livro[]
}

interface Emprestimo {
    livro: Livro
    dataContrato: Date
}
interface Recibo {
    multa: number
    dataDevolucao: Date
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

    let livroEmprestado1= emprestarLivro(biblioteca1, 'Ilíada e Odisséisa', new Date())
    let livroEmprestado2 = emprestarLivro(biblioteca1, 'Lord of the Rings', new Date("2024-05-01"))
    let recibo1 = devolverLivro(biblioteca1, livroEmprestado1, new Date("2024-05-15"))
    let recibo2 = devolverLivro(biblioteca1, livroEmprestado2, new Date("2024-05-15"))

    listagemDosLivros(biblioteca1)
    console.log(recibo1, recibo2)
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
function emprestarLivro(lista: Biblioteca, nomeLivro: string, dataEmprestimo: Date): Emprestimo {
    for (let i: number = 0; i < lista.livros.length; i++) {
        let el: Livro = lista.livros[i]
        if (nomeLivro === el.nome) {
            lista.livros.splice(i, 1)
            let dataContrato = new Date(dataEmprestimo.getTime())
            dataContrato.setDate(dataContrato.getDate()+7)
            return {
                livro: el,
                dataContrato: dataContrato,
            }
        }
    }
    return undefined
}
function devolverLivro (biblioteca: Biblioteca, emprestimo: Emprestimo, dataDevolucao: Date): Recibo {
    biblioteca.livros.push(emprestimo.livro)
    let diff: number = dataDevolucao.getTime() - emprestimo.dataContrato.getTime()
    let diferencaDeDias: number = Math.ceil(diff / (1000 * 60 * 60 * 24))
    let multa= 0
    if (diferencaDeDias > 0) {
        multa = diferencaDeDias * 2
    }
    return  {
        multa: multa,
        dataDevolucao: dataDevolucao
    }
}

main()
