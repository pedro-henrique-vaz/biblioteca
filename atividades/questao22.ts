interface Livro {
    nome: string
    autor: string
}
interface Biblioteca {
    livros: Livro[]
}
console.log(soma(number , number))
async function main(){
    const livro1: Livro = {
        nome: 'Ilíada e Odisséia',
        autor: 'Homero',
    }
    const livro2: Livro = {
        nome: "Guerra e Paz",
        autor: "Liev Tosltói"
    }
    const livro3: Livro = {
        nome: "Orgulho e Preconceito",
        autor: "Jane Austen"
    }
    const livro4: Livro = {
        nome: "Cem Anos de Solidão",
        autor: "Gabriel Garcia Marques"
    }
    const livro5: Livro = {
        nome: "Dom Quixote",
        autor: "Miguel de Cervantes"
    }
    const armazemDeLivro: Biblioteca = {
        livros: [livro1, livro2, livro3, livro4, livro5]
    }
    let parametros = listagemDosLivros(armazemDeLivro)
}

function listagemDosLivros(checagem: Biblioteca) {
    console.log("Livros Disponiveis: ")
    checagem.livros.forEach((el: Livro) => {
        console.log(`Nome: ${el.nome} Autor: ${el.autor}`)
        console.log(`Nome: ${el["nome"]} Autor: ${el["autor"]}`)
    })
}

function soma(a: number, b :number): number {
    return a + b;
}
main()