import {Livros} from "./livros.mjs"
import {DadosBiblioteca} from "./biblioteca.mjs"

const Biblioteca_do_pedro = new DadosBiblioteca()

const Livro1 = new Livros('Romeu e Julieta', 'William Shakespeare')
const Livro2 = new Livros('Dom Quixote De La Mancha','Miguel de Cervantes')
const Livro3 = new Livros('Os Miseráveis','Victor Hugo')
const Livro4 = new Livros('Dom Casmurro','Machado de Assis')

Biblioteca_do_pedro.CadastramentoDosLivros(Livro1)
Biblioteca_do_pedro.CadastramentoDosLivros(Livro2)
Biblioteca_do_pedro.CadastramentoDosLivros(Livro3)
Biblioteca_do_pedro.CadastramentoDosLivros(Livro4)

console.log ('Lista de livros Dispóniveis:')
Biblioteca_do_pedro.ListagemDosLivrosPorTituloOuAutor('Romeu e Julieta')

const DataDevolucao = new Date('15-04-2023')
Biblioteca_do_pedro.EmprestimoDosLivros('Dom Casmurro', DataDevolucao)

const DataDeHoje = new Date('28-04-2023')
Biblioteca_do_pedro.CobrancaDaMulta('Dom Casmurro', DataDeHoje)

console.log('Lista de Livros Atualizada:')
Biblioteca_do_pedro.listagemDosLivros()

