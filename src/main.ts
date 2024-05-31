import express from 'express'

import { Router, Request, Response } from 'express';
import {Biblioteca} from "./models/biblioteca";
import {Livro} from "./models/livro";

const app = express();

const route = Router()

app.use(express.json())

const biblioteca = new Biblioteca();
const livros: Livro[] = [];

route.get('/biblioteca', (req: Request, res: Response) => {
    res.json(biblioteca.livros)
})
route.get('/biblioteca/adicionar-livro/:nome/:autor', (req: Request, res: Response) => {
    const livro = new Livro(req.params['nome'], req.params['autor'])
    biblioteca.adicionarLivro(livro)
    res.json({message: "ok"})
})
route.get('/biblioteca/emprestar-livro/:nome', (req: Request, res: Response) => {
    const emprestimo = biblioteca.emprestarLivro(req.params['nome'], new Date())
    res.json(emprestimo)
})
route.get('/biblioteca/devolver-livro', (req: Request, res: Response) => {
    // const emprestimo = biblioteca.emprestarLivro(req.params['nome'], new Date())
    // res.json(emprestimo)
    res.json({ message: 'devolver livro pra biblioteca' })
})

route.post('/livros', (req: Request, res: Response) => {
    const livro = new Livro(req.body['nome'], req.body['autor'])
    livros.push(livro)
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
