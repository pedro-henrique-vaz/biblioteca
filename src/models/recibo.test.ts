import {describe, expect, it} from "@jest/globals";
import {Recibo} from "./recibo";

describe('test recibo', () => {
    it('Deve construir um recibo', () => {
        const multa = 0;
        const dataDev = new Date();

        const recibo = new Recibo(multa, dataDev);

        expect(recibo.multa).toBe(multa);
        expect(recibo.dataDevolucao).toBe(dataDev);
    })
    it('Nao deve construir um recibo quando multa for negativa', () => {
        const multa = -1;
        const dataDev = new Date();

        expect(() => new Recibo(multa, dataDev))
            .toThrow('Multa nao pode ser negativa.');
    })
})