import Image from "next/image"

// export async function generateStaticParams() {
//     const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
//     const res = await data.json()
//     return res.results.map((movie: { id: any }) => ({
//         movie: toString(movie.id),
//     }))
// }
export default async function MovieDetail({ params }) {
    const { movie } = params
    const image_path = 'https://image.tmdb.org/t/p/original'
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
        //     , {
        //     // if next's revalidate is not passed then this fetch will be cached and retain it
        //     // if next revalidate is set in this case 60 i.e. 60 seconds so after 60 seconds
        //     // the cache will be deleted or url is refetched

        //     next: { revalidate: 60 }
        // }
    )
    const res = await data.json()
    return (
        <div>
            <div>
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2>Runtime: {res.runtime} minutes </h2>
                <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded-md"> {res.status}  </h2>
                <Image
                    className="my-12"
                    src={image_path + res.backdrop_path}
                    alt={res.id}
                    width={600}
                    height={600}
                    priority
                />
                <p>{res.overview}</p>
            </div>
        </div>
    )
}