import {describe, expect, it} from "@jest/globals";
import {Livro} from "./livro";
describe('test livro', () => {
    it('Deve construir um livro', () => {
        const nomeLivro = "nomeTeste"
        const autorLivro = "nomeAutor"

        const livro = new Livro(undefined, nomeLivro, autorLivro)

        expect(livro.nome).toBe(nomeLivro);
        expect(livro.autor).toBe(autorLivro);
    })
    it('Nao deve construir um livro quando nao tiver um nome', () => {
        expect(() => new Livro(undefined, "", "autorTeste"))
            .toThrow('Nome do livro nao pode ser vazio');
    })
    it('Nao deve construir um livro quando nao tiver um autor', () => {
        expect(() => new Livro(undefined, "nomeTeste", ""))
            .toThrow('Autor do livro nao pode ser vazio');
    })
})