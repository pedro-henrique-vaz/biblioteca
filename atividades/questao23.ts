class Livro {
    nome: string
    autor: string
    constructor(nome: string, autor: string) {
        this.nome = nome;
        this.autor = autor;
    }
}
class Biblioteca {
    livros: Livro[]

    constructor() {
        this.livros = []
    }
    adicionarLivro(livro: Livro){
        for(let i: number = 0; i < this.livros.length; i++) {
            let l = this.livros[i]
            if(l.autor === livro.autor && l.nome === livro.nome){
                return
            }
        }
        this.livros.push(livro)
    }
    listagemDosLivros(){
        console.log("Aqui estão todos os livros Disponiveis: ")
        this.livros.forEach((el: Livro) => {
            console.log(`Nome - ${el.nome};  Autor - ${el.autor}`)
        })
    }
    emprestarLivro(nomeLivro: string, dataEmprestimo: Date): Emprestimo {
        for (let i: number = 0; i < this.livros.length; i++) {
            let el: Livro = this.livros[i]
            if (nomeLivro === el.nome) {
                this.livros.splice(i, 1)
                let dataContrato = new Date(dataEmprestimo.getTime())
                dataContrato.setDate(dataContrato.getDate()+7)
                return new Emprestimo(el, dataContrato)
            }
        }
        return undefined
    }
    devolverLivro(emprestimo: Emprestimo, dataDevolucao: Date): Recibo {
        this.livros.push(emprestimo.livro)
        let diff: number = dataDevolucao.getTime() - emprestimo.dataContrato.getTime()
        let diferencaDeDias: number = Math.ceil(diff / (1000 * 60 * 60 * 24))
        let multa= 0
        if (diferencaDeDias > 0) {
            multa = diferencaDeDias * 2
        }
        return new Recibo(multa, dataDevolucao)
    }
}
class Emprestimo {
    livro: Livro
    dataContrato: Date
    constructor(livro: Livro, dataContrato: Date) {
        this.livro = livro;
        this.dataContrato = dataContrato;
    }
}
class Recibo {
    multa: number
    dataDevolucao: Date

    constructor(multa: number, dataDevolucao: Date) {
        this.multa = multa;
        this.dataDevolucao = dataDevolucao;
    }
}

async function main(){
    let biblioteca1 = new Biblioteca()
    let livro1: Livro = new Livro('Ilíada e Odisséisa', 'Homero')
    let livro2: Livro = new Livro('Guerra e Paz', 'Liev Tosltói')
    let livro3: Livro = new Livro('Orgulho e Preconceito', 'Jane Austen')
    let livro4: Livro = new Livro('Cem Anos de Solidão', 'Gabriel Garcia Marques')
    let livro5: Livro = new Livro('Dom Quixote', 'Miguel de Cervantes')
    let livro6: Livro = new Livro('Harry Potter', 'J.K')
    let livro7: Livro = new Livro('Game of Thrones', 'Martin')
    let livro8: Livro = new Livro('Lord of the Rings', 'Tolkien')

    biblioteca1.adicionarLivro(livro1)
    biblioteca1.adicionarLivro(livro2)
    biblioteca1.adicionarLivro(livro3)
    biblioteca1.adicionarLivro(livro4)
    biblioteca1.adicionarLivro(livro5)
    biblioteca1.adicionarLivro(livro6)
    biblioteca1.adicionarLivro(livro7)
    biblioteca1.adicionarLivro(livro8)

    let emprestimo1 = biblioteca1.emprestarLivro('Ilíada e Odisséisa', new Date())
    let emprestimo2 = biblioteca1.emprestarLivro('Lord of the Rings', new Date("2024-05-08"))
    let recibo1 = biblioteca1.devolverLivro(emprestimo1, new Date("2024-05-20"))
    let recibo2 = biblioteca1.devolverLivro(emprestimo2, new Date("2024-05-20"))
    biblioteca1.listagemDosLivros()
    console.log(recibo1, recibo2)
}
main()