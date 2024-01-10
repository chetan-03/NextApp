// import 'dotenv'

import { Key } from "react"
import Movie from "./Movie"

export default async function Home() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    // console.log(res.results)
    return (
        <main>
            <div className="grid gap-16 fluid grid-cols-fluid">
                {res.results.map((movie: { id: Key; title: any; poster_path: any; release_date: any }) => {

                    return (

                        <Movie
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster_path={movie.poster_path}
                            release_date={movie.release_date}
                        />
                    )

                })}
            </div>
        </main>
    )
}