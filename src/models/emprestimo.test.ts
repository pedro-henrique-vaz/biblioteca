import {describe, expect, it} from "@jest/globals";
import {Emprestimo} from "./emprestimo";
import {Livro} from "./livro";

describe('test emprestimo', () => {
    it('Deve construir um emprestimo', () => {
        const livro = new Livro(undefined, "nomeTeste", "autorTeste")
        const dataCon = new Date();

        const recibo = new Emprestimo(1, livro, dataCon);

        expect(recibo.livro).toBe(livro);
        expect(recibo.dataContrato).toBe(dataCon);
    })
})