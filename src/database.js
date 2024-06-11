import fs from 'node:fs/promises'

//local absoluto do caminho do db
const databasePath = new URL('../db.json',import.meta.url)

export class Database{
    //# define encapsulamento privado do database (deve ser colocado em todos lugares)
    #database = {}

    constructor(){
        fs.readFile(databasePath, 'utf8').then(data => this.#database = JSON.parse(data)).catch(() => this.#persist());
    }


    //escreve os dados em arquivo fisico
    #persist(){
        fs.writeFile('db.json', JSON.stringify(this.#database))
    }

    insert(table, data){
        if(Array.isArray(this.#database[table])){
            this.#database[table].push(data);
        }else{
            this.#database[table] = [data]
        }
        this.#persist();
        return data;
    }

    select(table){
        const data = this.#database[table] ?? []
        return data
    }
    
    delete(table, id){
 
        const rowIndex = this.#database[table].findIndex(row=>row.id == id)

        if(rowIndex > -1){
            this.#database[table].splice(rowIndex, 1)
            this.#persist();
        }
    }

    update(table, id, data){

        const rowIndex = this.#database[table].findIndex(row=> row.id === id)
        
        if(rowIndex > -1){
            this.#database[table] = {id, ...data}
            this.#persist();
        }
    }
}