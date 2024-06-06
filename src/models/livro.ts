export class Livro {
    nome: string
    autor: string
    id: number

    constructor(id: number, nome: string, autor: string) {
        if (nome.length === 0){
            throw new Error('Nome do livro nao pode ser vazio')
        }
        if (autor.length === 0){
            throw new Error('Autor do livro nao pode ser vazio')
        }
        this.nome = nome;
        this.autor = autor;
        this.id = id;
    }
}