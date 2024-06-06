import express from 'express'
import { Router, Request, Response } from 'express';
import {Biblioteca} from "./models/biblioteca";
import {Livro} from "./models/livro";
import {Emprestimo} from "./models/emprestimo";
export {geradorDeID}

const app = express();

const route = Router()

app.use(express.json())

let livros: Livro[] = [];
let bibliotecas: Biblioteca[] = []
const emprestimos: Emprestimo[] = []

const proximoLivroID = geradorDeID()
const proximoBibliotecaID = geradorDeID()
const proximoEmprestimoID = geradorDeID()

function geradorDeID(): () => number {
    let id = 0;

    return function(): number {
        return ++id
    }
}

route.post('/bibliotecas', (req: Request, res: Response) => {
    const biblioteca = new Biblioteca(proximoBibliotecaID(), proximoEmprestimoID)
    bibliotecas.push(biblioteca)
    res.status(201)
    res.json(biblioteca)
})

route.get('/bibliotecas', (req: Request, res: Response) => {
    res.json(bibliotecas)
})

route.get('/bibliotecas/:id', (req: Request, res: Response) => {
    const biblioteca = bibliotecas.find((el) => el.id === +req.params.id);
    if (!biblioteca) {
        res.status(404)
        res.json("não existe")
        return
    }

    res.json(biblioteca)
})

route.delete('/bibliotecas/:id', (req: Request, res: Response) => {
    const biblioteca = bibliotecas.find((el) => el.id === +req.params.id);
    if (!biblioteca) {
        res.status(404)
        res.json("não existe")
        return
    }

    bibliotecas = bibliotecas.filter((el) => el.id !== +req.params.id)

    res.status(204)
    res.json()
})

route.patch('/bibliotecas/:id/livros/:livroId/adicionar', (req: Request, res: Response) => {
    const biblioteca = bibliotecas.find((el) => el.id === +req.params.id);
    if (!biblioteca) {
        res.status(404)
        res.json("não existe biblioteca")
        return
    }
    const livro = livros.find((el) => el.id === +req.params.livroId);
    if (!livro) {
        res.status(404)
        res.json("não existe livro")
        return
    }

    biblioteca.adicionarLivro(livro)

    res.status(204)
    res.json()
})

route.patch('/bibliotecas/:id/livros/emprestar', (req: Request, res: Response) => {
    const biblioteca = bibliotecas.find((el) => el.id === +req.params.id);    if (!biblioteca) {
        res.status(404)
        res.json("não existe biblioteca")
        return
    }

    const nome = req.query["nome"];
    if (!nome) {
        res.status(400)
        res.json("nome é obrigatorio")
        return
    }

    const emprestimo = biblioteca.emprestarLivro(nome.toString(), new Date())
    if (!emprestimo) {
        res.status(404)
        res.json("não existe livro")
        return
    }

    emprestimos.push(emprestimo)
    res.json(emprestimo)
})

route.patch('/bibliotecas/:id/emprestimos/:emprestimoId/devolver', (req: Request, res: Response) => {
    const biblioteca = bibliotecas.find((el) => el.id === +req.params.id);
    if (!biblioteca) {
        res.status(404)
        res.json("não existe biblioteca")
        return
    }
    const emprestimo = emprestimos.find((el) => el.id === +req.params.emprestimoId);
    if (!emprestimo) {
        res.status(404)
        res.json("não existe emprestimo")
        return
    }

    let recibo = emprestimo.recibo;
    if (recibo) {
        res.status(200)
        res.json(emprestimo)
        return
    }

    biblioteca.devolverLivro(emprestimo, new Date());

    res.status(201)
    res.json(emprestimo)
})

route.post('/livros', (req: Request, res: Response) => {
    const livro = new Livro(proximoLivroID(), req.body['nome'], req.body['autor'])
    livros.push(livro)
    res.status(201)
    res.json(livro)
})

route.get('/livros', (req: Request, res: Response) => {
    res.json(livros)
})

route.get('/livros/:id', (req: Request, res: Response) => {
    const livro = livros.find((el) => el.id === +req.params.id)
    if (!livro) {
        res.status(404)
        res.json("não existe")
        return
    }
    res.json(livro)
})

route.patch('/livros/:id', (req: Request, res: Response) => {
    const livro = livros.find((el) => el.id === +req.params.id);
    if (!livro) {
        res.status(404)
        res.json("não existe")
        return
    }

    livro.nome = req.body['nome']
    livro.autor = req.body['autor']

    res.json(livro)
})

route.delete('/livros/:id', (req: Request, res: Response) => {
    let livro = livros.find((el) => el.id === +req.params.id);
    if (!livro) {
        res.status(404)
        res.json("não existe")
        return
    }

    livros = livros.filter((el) => el.id !== +req.params.id)

    res.status(204)
    res.json()
})

app.use(route)
app.listen(8080, () => 'server running on port 8080')
