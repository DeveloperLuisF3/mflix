import { connectToDatabase } from "../../util/mongodb"

export default async (req, res) => {
    const { db } = await connectToDatabase()
    const movies = await db.collection("movies")
        .find({})
        .sort({ metatric: -1 })
        .limit(20)
        .toArray()
    console.log(movies)
    res.status(200).json(movies)
}


/* // Connection with Mongoose

import { dbConnect } from "../../util/mongodb"
import Movies from "../../models/movies" */


// const query = { title: 'Back to the Future' }

/* //Mongoose
dbConnect() */

/* export default async (req, res) => {
    const movies = await Movies
        .find(query)
        .sort({ metatric: -1 })
        .limit(20)
    console.log(movies)
    res.status(200).json(movies)
} */
