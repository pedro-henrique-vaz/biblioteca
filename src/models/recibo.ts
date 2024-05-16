export class Recibo {
    multa: number
    dataDevolucao: Date

    constructor(multa: number, dataDevolucao: Date) {
        if (multa < 0){
            throw new Error('Multa nao pode ser negativa.')
        }
        this.multa = multa;
        this.dataDevolucao = dataDevolucao;
    }
}