import {Readable, Writable,Transform} from 'node:stream'

//RECEBENDO DADOS POR TEMPO E TRABALHANDO COM ELES DIRETAMENTE (PARCELADO)
class OneToHundredStream extends Readable {
    index = 1
    _read(){
        const i = this.index++

        setTimeout(() =>{
            if(i>5){
                this.push(null)
            }else{
                const buffer = Buffer.from(String(i))
                this.push(buffer)
            }
        },1000)
    }
}

//MULTIPLICANDO OS DADOS POR 10 EM TEMPO REAL
class MultplyByTenStream extends Writable{
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString())*10)
        callback()
    }
}

//TRANSFORM STREAM
class InverseNumberStream extends Transform{
    _transform(chunk, encoding, callback) {
        const transformed = Number(chunk.toString())*-1
        callback(null, Buffer.from(String(transformed)))
    }
}


new OneToHundredStream().pipe(new InverseNumberStream()).pipe(new MultplyByTenStream())