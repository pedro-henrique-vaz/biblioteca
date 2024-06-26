import {describe, expect, it} from "@jest/globals";
import {Biblioteca} from "./biblioteca";
import {Livro} from "./livro";
import {Emprestimo} from "./emprestimo";

describe('test biblioteca', () => {
    describe('test contrutor', () => {
        it('Deve construir uma biblioteca', () => {

            const biblioteca = new Biblioteca(1, null)

            expect(biblioteca.livros).toHaveLength(0);
        })
    })

    describe('test adicionar Livro', () => {
        it('adiciona um livro', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro = new Livro(undefined, 'NomeA', 'AutorA')
            biblioteca.adicionarLivro(livro)

            expect(biblioteca.livros).toHaveLength(1);
            expect(biblioteca.livros).toContain(livro)
        })

        it('nao adiciona Livro se existe um livro igual', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro = new Livro(undefined, 'NomeA', 'AutorA')
            biblioteca.adicionarLivro(livro)
            biblioteca.adicionarLivro(livro)

            expect(biblioteca.livros).toHaveLength(1);
            expect(biblioteca.livros).toContain(livro)
        });

        it('nao adiciona Livro se existe um livro igual', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro1 = new Livro(undefined, 'NomeA', 'AutorA')
            const livro2 = new Livro(undefined, 'NomeA', 'AutorA')
            biblioteca.adicionarLivro(livro1)
            biblioteca.adicionarLivro(livro2)

            expect(biblioteca.livros).toHaveLength(1);
            expect(biblioteca.livros).toContain(livro1)
        });

        it('nao adiciona Livro se existe um livro igual', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro1 = new Livro(undefined, 'NomeA', 'AutorA')
            const livro2 = new Livro(undefined, 'NomeB', 'AutorB')
            biblioteca.adicionarLivro(livro1)
            biblioteca.adicionarLivro(livro2)

            expect(biblioteca.livros).toHaveLength(2);
            expect(biblioteca.livros).toContain(livro1)
            expect(biblioteca.livros).toContain(livro2)
        });
    })

    describe('test emprestar Livro', () => {
        const geradorID = () => 1;
        it('pegando um livro emprestado', () => {
            const biblioteca = new Biblioteca(1, geradorID)
            const livro = new Livro(undefined, 'nomeA', 'autorA')
            const dataEmprestimo = new Date()
            biblioteca.adicionarLivro(livro)

            const emprestimo = biblioteca.emprestarLivro(livro.nome, dataEmprestimo)

            expect(biblioteca.livros).toHaveLength(0)
            expect(emprestimo.livro).toBe(livro)
            expect(emprestimo.dataContrato.getTime()).toEqual(dataEmprestimo.setDate(dataEmprestimo.getDate()+7))
        })

        it('nao deve pegar um livro emprestado se a biblioteca for vazia', () => {
            const biblioteca = new Biblioteca(1, geradorID) // const biblioteca = new Biblioteca(0)
            const livro = new Livro(undefined, 'nomeA', 'autorA')
            const dataEmprestimo = new Date()

            const emprestimo = biblioteca.emprestarLivro(livro.nome, dataEmprestimo)

            expect(emprestimo).toBeUndefined()
        });

        it('nao deve pegar um livro emprestado se o livro nao existir', () => {
            const biblioteca = new Biblioteca(1, geradorID) // duvida
            const livro = new Livro(undefined, 'nomeA', 'autorA')
            const livro2 = new Livro(undefined, 'nomeB', 'autorB')
            const dataEmprestimo = new Date()
            biblioteca.adicionarLivro(livro)

            const emprestimo = biblioteca.emprestarLivro(livro2.nome, dataEmprestimo)
            
            expect(emprestimo).toBeUndefined()
        });
    })

    describe('test devolver Livro', () => {
        it('devolvendo livro antes da data do contrato', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro1 = new Livro(undefined, 'nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10')
            const dataDevolucao = new Date('2024-05-8')
            const emprestimo = new Emprestimo(1, livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(0)
            expect(recibo.dataDevolucao).toBe(dataDevolucao)
        })
        it('devolvendo livro na data contrato - 1 hora antes', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro1 = new Livro(undefined, 'nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10T15:00:00')
            const dataDevolucao = new Date('2024-05-10T14:00:00')
            const emprestimo = new Emprestimo(1, livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(0)
            expect(recibo.dataDevolucao).toBe(dataDevolucao)
        });
        it('devolvendo livro na data contrato - na mesma hora', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro1 = new Livro(undefined, 'nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10')
            const dataDevolucao = new Date('2024-05-10')
            const emprestimo = new Emprestimo(1, livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(0)
            expect(recibo.dataDevolucao).toBe(dataDevolucao)
        });
        it('devolvendo livro na data contrato - uma hora depois', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro1 = new Livro(undefined, 'nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10T15:00:00')
            const dataDevolucao = new Date('2024-05-10T16:00:00')
            const emprestimo = new Emprestimo(1, livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(2)
            expect(recibo.dataDevolucao).toBe(dataDevolucao)
        });
        it('devolvendo livro depois da data contrato', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro1 = new Livro(undefined, 'nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10')
            const dataDevolucao = new Date('2024-05-30')
            const emprestimo = new Emprestimo(1, livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(40)
            expect(recibo.dataDevolucao).toBe(dataDevolucao)
        });
        it('devolvendo livro antes da data contrato', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro1 = new Livro(undefined, 'nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10')
            const dataDevolucao = new Date('2024-05-9')
            const emprestimo = new Emprestimo(1, livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(0)
            expect(recibo.dataDevolucao).toBe(dataDevolucao)
        });
        it('devolvendo livro depois da data contrato', () => {
            const biblioteca = new Biblioteca(1, null)
            const livro1 = new Livro(undefined, 'nomeA', 'autorA')
            const dataContrato = new Date('2024-05-10')
            const dataDevolucao = new Date('2024-05-11')
            const emprestimo = new Emprestimo(1, livro1, dataContrato)

            const recibo = biblioteca.devolverLivro(emprestimo, dataDevolucao)

            expect(recibo.multa).toBe(2)
            expect(recibo.dataDevolucao).toBe(dataDevolucao)
        });
    })
})
