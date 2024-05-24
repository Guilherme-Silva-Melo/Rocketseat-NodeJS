import http from 'node:http'

const users = []
const server = http.createServer((req, res) => {
    const {method, url} = req;

    //TRATANDO REQUISICOES
    if(method === 'GET' && url ==='/users') {
        //retorno da requisicao get, setando o tipo de conteudo json e os usuarios em formato json
        return res.setHeader('Content-type','application/json').end(JSON.stringify(users));
    } 
    
    if(method === 'POST' && url ==='/users') {
        users.push({id:1, name: 'Gui', email: 'gui@email.com'});
        return res.end('Criação de usuario');
    }
    
    return res.end('Hello Gui');
});

//ouvindo a porta 3333 http do localhost
server.listen(3333);