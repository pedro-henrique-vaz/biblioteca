export class Recibo {
    multa: number
    dataDevolucao: Date

    constructor(multa: number, dataDevolucao: Date) {
        this.multa = multa;
        this.dataDevolucao = dataDevolucao;
    }
}