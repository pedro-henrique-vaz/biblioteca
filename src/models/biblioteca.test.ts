import {describe, expect, it} from "@jest/globals";
import {Biblioteca} from "./biblioteca";
import {Livro} from "./livro";
import {Emprestimo} from "./emprestimo";

describe('test biblioteca', () => {
    describe('test contrutor', () => {
        it('Deve construir uma biblioteca', () => {

            const biblioteca = new Biblioteca()

            expect(biblioteca.livros).toHaveLength(0);
        })
    })

    describe('test adicionar Livro', () => {
        it('adiciona um livro', () => {
            const biblioteca = new Biblioteca()
            const livro = new Livro('NomeA', 'AutorA')
            biblioteca.adicionarLivro(livro)

            expect(biblioteca.livros).toHaveLength(1);
            expect(biblioteca.livros).toContain(livro)
        })

        it('nao adiciona Livro se existe um livro igual', () => {
            const biblioteca = new Biblioteca()
            const livro = new Livro('NomeA', 'AutorA')
            biblioteca.adicionarLivro(livro)
            biblioteca.adicionarLivro(livro)

            expect(biblioteca.livros).toHaveLength(1);
            expect(biblioteca.livros).toContain(livro)
        });

        it('nao adiciona Livro se existe um livro igual', () => {
            const biblioteca = new Biblioteca()
            const livro1 = new Livro('NomeA', 'AutorA')
            const livro2 = new Livro('NomeA', 'AutorA')
            biblioteca.adicionarLivro(livro1)
            biblioteca.adicionarLivro(livro2)

            expect(biblioteca.livros).toHaveLength(1);
            expect(biblioteca.livros).toContain(livro1)
        });

        it('nao adiciona Livro se existe um livro igual', () => {
            const biblioteca = new Biblioteca()
            const livro1 = new Livro('NomeA', 'AutorA')
            const livro2 = new Livro('NomeB', 'AutorB')
            biblioteca.adicionarLivro(livro1)
            biblioteca.adicionarLivro(livro2)

            expect(biblioteca.livros).toHaveLength(2);
            expect(biblioteca.livros).toContain(livro1)
            expect(biblioteca.livros).toContain(livro2)
        });
    })

    describe('test emprestar Livro', () => {
        it('pegando um livro emprestado', () => {
            const biblioteca = new Biblioteca()
            const livro = new Livro('nomeA', 'autorA')
            const dataEmprestimo = new Date()
            biblioteca.adicionarLivro(livro)

            const emprestimo = biblioteca.emprestarLivro(livro.nome, dataEmprestimo)

            expect(biblioteca.livros).toHaveLength(0)
            expect(emprestimo.livro).toBe(livro)
            expect(emprestimo.dataContrato.getTime()).toEqual(dataEmprestimo.setDate(dataEmprestimo.getDate()+7))
        })

        it('nao deve pegar um livro emprestado se a biblioteca for vazia', () => {
            const biblioteca = new Biblioteca() // const biblioteca = new Biblioteca(0)
            const livro = new Livro('nomeA','autorA')
            const dataEmprestimo = new Date()

            const emprestimo = biblioteca.emprestarLivro(livro.nome, dataEmprestimo)
            
            expect(biblioteca.livros).toThrow("A biblioteca esta vazia")
        });

        it('nao deve pegar um livro emprestado se o livro nao existir', () => {
            const biblioteca = new Biblioteca() // duvida
            const livro = new Livro('nomeA','autorA')
            const dataEmprestimo = new Date()

            const emprestimo = biblioteca.emprestarLivro(livro.nome, dataEmprestimo)
            
            expect(biblioteca.livros).toThrow("O livro nao existe")
        });
    })

    describe('test devolver Livro', () => {
        it('devolvendo livro antes da data do contrato', () => {
            const biblioteca = new Biblioteca()
            const livro1 = new Livro('nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10')
            const dataDevolucao = new Date('2024-05-8')
            const emprestimo = new Emprestimo(livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(0)
            expect(recibo.dataDevolucao).toContain(dataDevolucao)
        })
        it('devolvendo livro na data contrato', () => {
            const biblioteca = new Biblioteca()
            const livro1 = new Livro('nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10')
            const dataDevolucao = new Date('2024-05-10')
            const emprestimo = new Emprestimo(livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(0)
            expect(recibo.dataDevolucao).toContain(dataDevolucao)
        });
        it('devolvendo livro depois da data contrato', () => {
            const biblioteca = new Biblioteca()
            const livro1 = new Livro('nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10')
            const dataDevolucao = new Date('2024-05-30')
            const emprestimo = new Emprestimo(livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(40)
            expect(recibo.dataDevolucao).toContain(dataDevolucao)
        });
    })
})
