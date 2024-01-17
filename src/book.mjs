export class Book {
    title;
    author;
    returnDate;

    constructor(title, author) {
        this.title = title
        this.author = author
        this.returnDate = null
    }

    lend(returnDate) {
        this.returnDate = returnDate
    }
    isLend() {
        if (this.returnDate) {
            console.log('O livro esta disponivel.');
        } else {
            console.log('O livro nao esta disponivel.');
        }
    }

    return(returnDate) {
        if (this.returnDate && returnDate > this.returnDate) {
            const daysDelay = Math.ceil((returnDate - this.returnDate) / (1000 * 60 * 60 * 24))
            return daysDelay * 2
        }
        return 0
    }
}
