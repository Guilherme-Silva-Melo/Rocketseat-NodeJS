export async function json(req,res){
    const buffers = []

    //aguarda os dados
    for await (const chunk of req){
        buffers.push(chunk)
    }

    try{
    //concatena os dados do buffer
    const data = Buffer.concat(buffers).toString()

    //tira de json para tipo primitivo js
    req.body = JSON.parse(data)
    
    }catch{
        req.body = null
    }
    
    res.setHeader('Content-type','application/json')
}