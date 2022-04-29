import { MongoClient } from "mongodb"

let uri = process.env.MONGODB_URI
let dbName = process.env.MONGODB_DB

let cachedClient = null
let cachedDb = null

if (!uri) {
    throw new Error(
        'Please define the MONGODB_uri environment variable inside .env.local'
    )
}

if (!dbName) {
    throw new Error(
        'Please define MONGODB_DB environment variable inside .env.local'
    )
}

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb }
    }
    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    const db = await client.db(dbName)

    cachedClient = client
    cachedDb = db

    return { client, db }
}


// Connection with Mongoose!

/* import { connect, connection } from "mongoose"

const uri = process.env.MONGODB_URI

const conn = {
    isConnected: false
}

export async function dbConnect() {
    if (conn.isConnected) return
    const db = await connect(uri)
    conn.isConnected = (db.connections[0].readyState)
    console.log(db.connection.db.databaseName)
}

connection.on("connected", () => {
    console.log("MongoDb is connected => luisf")
})

connection.on("error", (err) => {
    console.log(err)
}) */
