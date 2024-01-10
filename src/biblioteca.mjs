export class DadosBiblioteca {
    constructor() {
        this.livros = []
    }
    CadastramentoDosLivros(livro) {
        this.livros.push(livro) // push adiciona Livro em Livros
    }
    listagemDosLivros() {
        this.livros.forEach(livro => { // percorre na classe Livros e digita o titulo e autor de acordo com a classe, passando a ser adicionado a Livro
            console.log(`${livro.titulo} - ${livro.autor}`)
        })
    }
    ListagemDosLivrosPorTituloOuAutor(termo) {
        this.livros.forEach(livro => {
            if (livro.titulo.toUpperCase().includes(termo.toUpperCase()) || livro.autor.toUpperCase().includes(termo.toUpperCase())){ // titulos e autores em maiusculo, includes retornando a false ou true caso o termo diga que esta tudo correto
                console.log(`${livro.titulo} - ${livro.autor}`)
            }
        })
    }
    EmprestimoDosLivros(titulo, datadadevolucao) {
        const livro = this.livros.find(livro => livro.titulo.toLowerCase() || titulo.toLowerCase()) // faz a procura do livro com o find (localizando o livro e retornando no script)
        if (livro) { // usei para fazer a procura do titulo do livro na biblioteca (true)
            livro.Emprestimo(datadadevolucao)
            console.log(` O livro ${livro.titulo} foi alugado e tem como data de devolução ${datadadevolucao}. Caso não for entregue no dia correspondente, será cobrado uma taxa de R$2,00 por dia.`)
        } else { // usei para fazer a procura do titulo do livro na biblioteca (false)
            console.log(`O livro ${titulo} não foi encontrado em nosso bando de dados.`)
        }
    }
    CobrancaDaMulta(titulo, datadadevolucao) {
        const livro = this.livros.find(livro => livro.titulo.toLowerCase() || titulo.toLowerCase()) // faz a procura do livro com o find (localizando o livro e retornando no script)
        if (livro) {
            const multa = livro.CalcularMulta(datadadevolucao)
            console.log(`OPS: Voçẽ ultrapassou a data limite do livro ${livro.titulo} que era respectivamente, ${datadadevolucao} ,e terá que pagar um valor no total de: R$${multa.toFixed(2)}`)
        } else {
            console.log(`O livro ${titulo} foi entregue no dia correto e por isso o mesmo não foi multado.`)
        }
    }
}


