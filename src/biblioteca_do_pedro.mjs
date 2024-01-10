import {Livros} from "./livros.mjs"
import {DadosBiblioteca} from "./biblioteca.mjs"

const biblioteca = new DadosBiblioteca();
// biblioteca.livros -> []

const Livro1 = new Livros('Romeu e Julieta', 'William Shakespeare')
// biblioteca.livros -> []
const Livro2 = new Livros('Dom Quixote De La Mancha','Miguel de Cervantes')
// biblioteca.livros -> []
const Livro3 = new Livros('Os Miseráveis','Victor Hugo')
// biblioteca.livros -> []
const Livro4 = new Livros('Dom Casmurro','Machado de Assis')
// biblioteca.livros -> []

// biblioteca.livros -> []
biblioteca.CadastramentoDosLivros(Livro1)
// biblioteca.livros -> [Livro1]
biblioteca.CadastramentoDosLivros(Livro2)
// biblioteca.livros -> [Livro1, Livro2]
biblioteca.CadastramentoDosLivros(Livro3)
// biblioteca.livros -> [Livro1, Livro2, Livro3]
biblioteca.CadastramentoDosLivros(Livro4)
// biblioteca.livros -> [Livro1, Livro2, Livro3, Livro4]

console.log ('Lista de livros Dispóniveis:')
biblioteca.ListagemDosLivrosPorTituloOuAutor('Romeu e Julieta')

const DataDevolucao = new Date('15-04-2023')
biblioteca.EmprestimoDosLivros('Dom Casmurro', DataDevolucao)

const DataDeHoje = new Date('28-04-2023')
biblioteca.CobrancaDaMulta('Dom Casmurro', DataDeHoje)

console.log('Lista de Livros Atualizada:')
biblioteca.listagemDosLivros()

