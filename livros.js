export default Livros
class Livros {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataEmprestimo = null;
    }

    Emprestimo(dataDevolucao) {
        this.dataEmprestimo = dataDevolucao;
    }

    CalcularMulta(dataDevolucao) {
        if (this.dataEmprestimo && dataDevolucao > this.dataEmprestimo) {   // ve se o livro foi emprestado e se a data da devolução ultrapassa a data do empréstimo.
            const diasAtraso = Math.ceil((dataDevolucao - this.dataEmprestimo) / (1000 * 60 * 60 * 24)); // essa parte converte a diferença de milissegundos para dias.
            const multa = diasAtraso * 2;
            return multa;
        }
        return 0;
    }
}
