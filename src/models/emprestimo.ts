import {Livro} from "./livro";
import {Recibo} from "./recibo";

export class Emprestimo {
    livro: Livro
    dataContrato: Date
    recibo: Recibo
    id: number

    constructor(id: number, livro: Livro, dataContrato: Date) {
        this.livro = livro;
        this.dataContrato = dataContrato;
        this.id = id;
    }
}