import {describe, expect, it} from "@jest/globals";
import {Biblioteca} from "./biblioteca";
describe('test biblioteca', () => {
    describe('test contrutor', () => {
        it('Deve construir uma biblioteca', () => {

            const biblioteca = new Biblioteca()

            expect(biblioteca.livros).toHaveLength(0);
        })
    })

    describe('test adicionar Livro', () => {
        it('', () => {
        })
    })

    describe('test emprestar Livro', () => {
        it('', () => {
        })
    })

    describe('test devolver Livro', () => {
        it('', () => {
        })
    })
})