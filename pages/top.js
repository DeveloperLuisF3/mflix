/* // Connection with Mongoose!
import { dbConnect } from "../util/mongodb"
import Movies from "../models/movies" */

import { connectToDatabase } from "../util/mongodb"

import Head from "next/head"

import Layout from "../components/layout"

export default function Top({ movies }) {
    return (
        <Layout>
            <Head>
                <title>Top</title>
            </Head>
            <div>
                <h1>Top 10 Movies of All Time</h1>
                <p>
                    <small>(According to Metacritic)</small>
                </p>
                <ul>
                    {movies.map((movie) => (
                        <li>
                            <h2>{movie.title}</h2>
                            <h3>{movie.metacritic}</h3>
                            <p>{movie.plot}</p>
                            <p>{movie.cast}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const { db } = await connectToDatabase()
    const movies = await db
        .collection("movies")
        .find({})
        .sort({ metacritic: -1 })
        .limit(10)
        .toArray()

    console.log(movies)

    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies)),
        }
    }
}

/* // Mongoose!
export async function getStaticProps() {
    await dbConnect()
    const movies = await Movies
        .find({})
        .sort({ metacritic: -1 })
        .limit(100)
    console.log(movies)
    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies)),
        }
    }
} */
