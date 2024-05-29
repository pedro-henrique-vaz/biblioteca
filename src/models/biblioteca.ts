import {Livro} from "./livro";
import {Emprestimo} from "./emprestimo";
import {Recibo} from "./recibo";

export class Biblioteca {
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
