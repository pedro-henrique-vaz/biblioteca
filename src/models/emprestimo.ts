import {Livro} from "./livro";
import {Recibo} from "./recibo";

export class Emprestimo {
    livro: Livro
    dataContrato: Date
    recibo: Recibo

    constructor(livro: Livro, dataContrato: Date) {
        this.livro = livro;
        this.dataContrato = dataContrato;
    }
}