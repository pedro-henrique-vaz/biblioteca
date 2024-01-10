class Livros {
    constructor(titulo, autor) {
        this.titulo = titulo
        this.autor = autor
        this.dataEmprestimo = null
    }

    Emprestimo(dataDevolucao) {
        this.dataEmprestimo = datadadevolucao
    }

    CalcularMulta(datadadevolucao) {
        if (this.dataEmprestimo && datadadevolucao > this.dataEmprestimo) { // ve se o livro foi emprestado e se a data da devolução ultrapassa a data do empréstimo.
            const diasAtraso = Math.ceil((datadadevolucao - this.dataEmprestimo) / (1000 * 60 * 60 * 24)) // essa parte converte a diferença de milissegundos para dias.
            const multa = DiasDeAtraso * 2
            return multa
        }
        return 0;
    }
}
class DadosBiblioteca {
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
    ListagemDosLivrosPorTituloOuAutor() {
        this.livros.forEach(livro => {
            if (livro.titulo.toUpperCase().includes(termo.ToUpperCase()) || livro.autor.toUpperCase().includes(termo.ToUpperCase)){ // titulos e autores em maiusculo, includes retornando a false ou true caso o termo diga que esta tudo correto
                console.log(`${livro.titulo} - ${livro.autor}`)
            }
        })
    }
    EmprestimoDosLivros(titulo, datadadevolucao) {
            const livro = this.livros.find(livro => livro.titulo.toLowerCase() || titulo.toLowerCase()) // faz a procura do livro com o find (localizando o livro e retornando no script)
            if (livro) { // usei para fazer a procura do titulo do livro na biblioteca (true)
                livro.emprestar(datadadevolucao)
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