import { Pool } from "pg"

let conn: any

if(!conn){
    conn = new Pool({
        user: "rqnublah",
        password: "T8Pbf40me9gWCiiTrsIY9Kmf2P9vlZON",
        host: "trumpet.db.elephantsql.com",
        port: 5432,
        database: "rqnublah"
    }) 
}

export { conn } ;
