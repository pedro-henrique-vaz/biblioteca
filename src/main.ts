import express from 'express'

import { Router, Request, Response } from 'express';
import {Biblioteca} from "./models/biblioteca";
import {Livro} from "./models/livro";

const app = express();

const route = Router()

app.use(express.json())

const biblioteca = new Biblioteca();

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
route.get('/livro', (req: Request, res: Response) => {
    res.json({ message: 'criar um livro' })
})
route.get('/toUpperCase/:text', (req: Request, res: Response) => {
    res.json({ text: req.params["text"].toUpperCase() })
})

app.use(route)


app.listen(3333, () => 'server running on port 3333')
