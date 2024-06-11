import http from 'node:http'
import {json} from './middlewares/json.js'

import {routes} from './routes.js';

const server = http.createServer(async (req, res) => {
    const {method, url} = req;
    
    //funcao externa
    await json(req, res)

    //Buscando se existe a rota
    const route = routes.find(route => {
        return route.method === method && route.path.test(url);
    })

    if(route){
        const routeParams = req.url.match(route.path);

        route.params = {...routeParams.groups}
        req.params = route.params
        return route.handler(req, res)
    }

    return res.writeHead(404).end('404 NOT FOUND');
});

//ouvindo a porta 3333 http do localhost
server.listen(3333);