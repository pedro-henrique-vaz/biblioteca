export class Book {
    title;
    author;
    returnDate;

    constructor(title, author) {
        this.title = title
        this.author = author
        this.returnDate = null

        // this.returnDate = null       // livro n esta emprestado, nao pode ser devolvido
        // this.returnDate = new Date() // livro esta emprestado, nao pode ser emprestrado
    }

    lend(returnDate) {
        if (this.isLend()){
            throw new Error("livro ja esta emprestado")
        }
        this.returnDate = returnDate
    }
    isLend() {
        if (this.returnDate !== null) {
            return true;
        } else {
            return false;
        }
    }

    return(returnDate) {
        if (!this.isLend()){
            throw new Error("livro não esta emprestado")
        }
        if (this.returnDate && returnDate > this.returnDate) {
            this.returnDate = null
            const daysDelay = Math.ceil((returnDate - this.returnDate) / (1000 * 60 * 60 * 24))
            return daysDelay * 2
        }
        this.returnDate = null
        return 0
    }
}
