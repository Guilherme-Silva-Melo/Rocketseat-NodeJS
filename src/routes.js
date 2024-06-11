import { Database } from "./database.js";
import {randomUUID} from 'node:crypto'
import {buildRoutePath} from './utils/build-route-path.js'

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const users = database.select('users')
            //retorno da requisicao get, setando o tipo de conteudo json e os usuarios em formato json
            return res.end(JSON.stringify(users));
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const {name, email} = req.body
            const user = {id: randomUUID(), name, email};

            database.insert('users',user)
            return res.writeHead(201).end();
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handler: (req, res) => {
            const { id } = req.params
            database.delete('users',id)

            return res.writeHead().end();
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/users/:id'),
        handler: (req, res) => {
            const {name, email} = req.params
            database.update('users',id,{name, email})

            return res.writeHead(204).end();
        }
    }
]