# Rocketseat-NodeJS
Curso de Node.js da Rocketseat

## Anotaçoes
### METODOS

GET -> Buscar info </br>
POST -> Criar info </br>
PUT -> Editar info (muito parametro) </br>
PATCH -> Atualizar info (um parametro especifico) </br>
DELETE -> Deleter info

### REQUIRED 
METODO / URL 

### STATEFUL VS STATELESS

STATELESS -> Guarda dados apos encerramento aplicação </br>
STATEFUL -> Guarda e utiliza dados localmente durante a execução

### HTTP RESPONSE STATUS CODE

100 -> 199 = Informacao </br>
200 -> 299 = OK </br>
300 -> 399 = Redirect </br>
400 -> 499 = Client Error </br>
500 -> 599 = Server Error

### STREAMS
MECANISMOS PARA PARCELAR A LEITURA E EXECUCAO DOS DADOS ASYNC

### BUFFER
um buffer eh um tipo de dado criado para melhorar a comunicação entre o baixo nivel(memoria de maquina/ binarios/hexa) e os dados em alto nivel

### MIDDLEWARE 
Interceptador dos dados, para transformacao, executar codigo, etc

### QUERY PARAMETES -> filtros, paginacao, 
http://localhost:3333/users?userId=1&

### ROUTES PARAMETES -> requiscao para o servidor em url (informacao enviada url eh fragil ser raptada)
GET http://localhost:3333/users/1
DELETE http://localhost:3333/users/1

### REQUEST BODY -> serve para enviar informacaoes (HTTPs) (envia informacao à parte)
POST http://localhost:3333/users
