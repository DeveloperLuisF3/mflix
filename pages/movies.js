/* // Connection with Mongoose!
import { dbConnect } from "../util/mongodb"
import Movies from "../models/movies" */

import { connectToDatabase } from "../util/mongodb"

import Head from "next/head"

import Layout from "../components/layout"

const query = { title: 'Back to the Future' }

export default function fillMovies({ movies }) {
    return (
        <Layout>
            <Head>
                <title>Movies</title>
            </Head>
            <div>
                <h1>My favorite movie!</h1>
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

export async function getServerSideProps() {
    const { db } = await connectToDatabase()
    const movies = await db
        .collection("movies")
        .find(query)
        .sort({ metacritic: -1 })
        .limit(20)
        .toArray()

    console.log(movies)

    return {
        props: {
            movies: JSON.parse(JSON.stringify(movies)),
        }
    }
}

/* // Mongoose!

export async function getServerSideProps() {
    await dbConnect()
    const movies = await Movies
        .find(query)
        .sort({ metacritic: -1 })
        .limit(20)
    console.log(movies)
    return {
        props: {
            dbmovies: JSON.parse(JSON.stringify(movies)),
        }
    }
} */
