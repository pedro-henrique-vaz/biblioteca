import {Livro} from "./livro";

export class Emprestimo {
    livro: Livro
    dataContrato: Date
    constructor(livro: Livro, dataContrato: Date) {
        this.livro = livro;
        this.dataContrato = dataContrato;
    }
}