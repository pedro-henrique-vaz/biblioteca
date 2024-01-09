class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataEmprestimo = null;
    }

    emprestar(dataDevolucao) {
        this.dataEmprestimo = dataDevolucao;
    }

    calcularMulta(dataDevolucao) {
        if (this.dataEmprestimo && dataDevolucao > this.dataEmprestimo) {
            const diasAtraso = Math.ceil((dataDevolucao - this.dataEmprestimo) / (1000 * 60 * 60 * 24));
            const multa = diasAtraso * 2;
            return multa;
        }
        return 0;
    }
}

class SistemaBiblioteca {
    constructor() {
        this.livros = [];
    }

    cadastrarLivro(livro) {
        this.livros.push(livro);
    }

    listarTodosLivros() {
        this.livros.forEach(livro => {
            console.log(`${livro.titulo} - ${livro.autor}`);
        });
    }

    listarLivrosPorTituloOuAutor(termo) {
        this.livros.forEach(livro => {
            if (livro.titulo.toLowerCase().includes(termo.toLowerCase()) || livro.autor.toLowerCase().includes(termo.toLowerCase())) {
                console.log(`${livro.titulo} - ${livro.autor}`);
            }
        });
    }

    emprestarLivro(titulo, dataDevolucao) {
        const livro = this.livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
        if (livro) {
            livro.emprestar(dataDevolucao);
            console.log(`${livro.titulo} emprestado até ${dataDevolucao}`);
        } else {
            console.log(`Livro ${titulo} não encontrado.`);
        }
    }

    cobrarMulta(titulo, dataDevolucao) {
        const livro = this.livros.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
        if (livro) {
            const multa = livro.calcularMulta(dataDevolucao);
            console.log(`Multa para ${livro.titulo}: R$${multa.toFixed(2)}`);
        } else {
            console.log(`Livro ${titulo} não encontrado.`);
        }
    }
}

// Exemplo de uso
const sistema = new SistemaBiblioteca();

const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("Harry Potter", "J.K. Rowling");

sistema.cadastrarLivro(livro1);
sistema.cadastrarLivro(livro2);

sistema.listarTodosLivros();

sistema.emprestarLivro("Dom Casmurro", new Date(2024, 0, 16));

sistema.cobrarMulta("Dom Casmurro", new Date(2024, 0, 20));
