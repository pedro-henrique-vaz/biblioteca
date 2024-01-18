import {Book} from "./book.mjs"
import {Library} from "./biblioteca.mjs"

const library = new Library();

const book1 = new Book('Romeu e Julieta', 'William Shakespeare')
const book2 = new Book('Dom Quixote De La Mancha','Miguel de Cervantes')
const book3 = new Book('Os Miseráveis','Victor Hugo')
const book4 = new Book('Dom Casmurro','Machado de Assis')
const book5 = new Book('Dom Casmurro','Machado de Assis')

library.addBook(book1)
library.addBook(book2)
library.addBook(book3)
library.addBook(book4)
library.addBook(book5)

console.log('Lista de Livros Atualizada:')
library.listBooks()

console.log ('Lista de livros Dispóniveis:')
library.listBooksByTitleOrAuthor('Romeu')

const ReturnDate = new Date('2023-04-15')
library.lendBook('Romeu e Julieta', ReturnDate)
library.lendBook('Romeu e Julieta', ReturnDate)
library.lendBook('Dom Casmurro', ReturnDate)
library.lendBook('Dom Casmurro', ReturnDate)
library.lendBook('Dom Casmurro', ReturnDate)

const TodayDate = new Date('2023-04-28')
library.returnBook('Dom Casmurro', TodayDate)
library.returnBook('Dom Casmurro', TodayDate)
library.returnBook('Dom Casmurro', TodayDate)
library.returnBook('Os Miseráveis', TodayDate)
