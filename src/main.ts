import express from 'express'

import { Router, Request, Response } from 'express';
import {Biblioteca} from "./models/biblioteca";
import {Livro} from "./models/livro";
import {Emprestimo} from "./models/emprestimo";

const app = express();

const route = Router()

app.use(express.json())

const livros: Livro[] = [];
const bibliotecas: Biblioteca[] = []
const emprestimos: Emprestimo[] = []

route.post('/bibliotecas', (req: Request, res: Response) => {
    const biblioteca = new Biblioteca()
    bibliotecas.push(biblioteca)
    res.status(201)
    res.json(bibliotecas.length - 1)
})

route.get('/bibliotecas', (req: Request, res: Response) => {
    res.json(bibliotecas.filter(el => !!el))})

route.get('/bibliotecas/:id', (req: Request, res: Response) => {
    const bilioteca = bibliotecas[+req.params.id];
    if (!bilioteca) {
        res.status(404)
        res.json("não existe")
        return
    }

    res.json(bilioteca)
})

route.delete('/bibliotecas/:id', (req: Request, res: Response) => {
    const biblioteca = bibliotecas[+req.params.id];
    if (!biblioteca) {
        res.status(404)
        res.json("não existe")
        return
    }

    bibliotecas[+req.params.id] = undefined

    res.status(204)
    res.json()
})

route.patch('/bibliotecas/:id/adicionar-livro/:livroId', (req: Request, res: Response) => {
    const biblioteca = bibliotecas[+req.params.id];
    if (!biblioteca) {
        res.status(404)
        res.json("não existe biblioteca")
        return
    }
    const livro = livros[+req.params.livroId];
    if (!livro) {
        res.status(404)
        res.json("não existe livro")
        return
    }

    biblioteca.adicionarLivro(livro)

    res.status(204)
    res.json()
})

route.patch('/bibliotecas/:id/emprestar-livro', (req: Request, res: Response) => {
    const biblioteca = bibliotecas[+req.params.id];
    if (!biblioteca) {
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
    res.json(emprestimos.length - 1)
})

route.patch('/bibliotecas/:id/devolver-livro/:emprestimoId', (req: Request, res: Response) => {
    const biblioteca = bibliotecas[+req.params.id];
    if (!biblioteca) {
        res.status(404)
        res.json("não existe biblioteca")
        return
    }
    const emprestimo = emprestimos[+req.params.emprestimoId];
    if (!emprestimo) {
        res.status(404)
        res.json("não existe emprestimo")
        return
    }

    let recibo = emprestimo.recibo;
    if (recibo) {
        res.status(200)
        res.json(recibo)
        return
    }

    recibo = biblioteca.devolverLivro(emprestimo, new Date());

    res.status(201)
    res.json(recibo)
})

route.post('/livros', (req: Request, res: Response) => {
    const livro = new Livro(req.body['nome'], req.body['autor'])
    livros.push(livro)
    res.status(201)
    res.json(livros.length - 1)
})

route.get('/livros', (req: Request, res: Response) => {
    res.json(livros.filter(el => !!el))
})

route.get('/livros/:id', (req: Request, res: Response) => {
    const livro = livros[+req.params.id];
    if (!livro) {
        res.status(404)
        res.json("não existe")
        return
    }

    res.json(livro)
})

route.patch('/livros/:id', (req: Request, res: Response) => {
    const livro = livros[+req.params.id];
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
    let livro = livros[+req.params.id];
    if (!livro) {
        res.status(404)
        res.json("não existe")
        return
    }

    livros[+req.params.id] = undefined

    res.status(204)
    res.json()
})

app.use(route)
app.listen(8080, () => 'server running on port 8080')
