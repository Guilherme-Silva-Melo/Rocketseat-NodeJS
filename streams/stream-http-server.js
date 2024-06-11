import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString())* -1
        console.log(transformed)
        callback(null, Buffer.from(String(transformed)))
    }
}

const server = http.createServer(async (req, res) => {
    const buffers = []

    //aguarda os dados
    for await (const chunk of req){
        buffers.push(chunk)
    }

    //concatena os dados do buffer
    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)
    
    return res.end(fullStreamContent)
})

server.listen(3334)
