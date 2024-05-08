export class Library {
    books;

    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }

    listBooks() {
        for (const book of this.books){
            console.log(`${book.title} - ${book.author}`)
        }
    }

    listBooksByTitleOrAuthor(term) {
        for (const book of this.books){
            if (book.title.toUpperCase().includes(term.toUpperCase()) || book.author.toUpperCase().includes(term.toUpperCase())){
                console.log(`${book.title} - ${book.author}`)
            }
        }
    }

    lendBook(title, returnDate) {
        const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase() && !book.isLend())
        if (book) {
            book.lend(returnDate)
        } else {
            console.log(`O livro ${title} não foi encontrado em nosso banco de dados.`)
        }
    }


    returnBook(title, returnDate) {
        const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase() && book.isLend())
        if (book) {
            const fine = book.return(returnDate)
            console.log(`O livro ${book.title} foi devolvido na data ${returnDate.toDateString()}`)
        } else {
            console.log(`O livro ${title} não foi encontrado na lista de livros emprestados.`)
        }
    }}