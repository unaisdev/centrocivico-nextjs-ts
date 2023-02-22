import { Pool } from "pg"

let conn: any

if(!conn){
    conn = new Pool({
        user: "postgres",
        password: "admin",
        host: "localhost",
        port: 5432,
        database: "centrocivico"
    }) 
}

export { conn } ;
