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
        const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase())
        if (book) {
            book.lend(returnDate)
            console.log(` O livro ${book.title} foi alugado e tem como data de devolução ${returnDate}. Caso não for entregue no dia correspondente, será cobrado uma taxa de R$2,00 por dia.`)
        } else {
            console.log(`O livro ${title} não foi encontrado em nosso bando de dados.`)
        }
    }


    returnBook(title, returnDate) {
        const book = this.books.find(book => book.title.toLowerCase() === title.toLowerCase())
        if (book) {
            const fine = book.return(returnDate)
            console.log(`OPS: Voçẽ ultrapassou a data limite do livro ${book.title} que era respectivamente, ${returnDate} ,e terá que pagar um valor no total de: R$${fine.toFixed(2)}`)
        } else {
            console.log(`O livro ${title} foi entregue no dia correto e por isso o mesmo não foi multado.`)
        }
    }}