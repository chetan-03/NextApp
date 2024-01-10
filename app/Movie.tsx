import Link from 'next/link'
import Image from 'next/image'

export default function Movie({ title, id, poster_path, release_date }) {
    const image_path = 'https://image.tmdb.org/t/p/original'
    return (
        <div>
            <h2>{title}</h2>
            <h1>{release_date}</h1>
            <Link href={`${id}`}>
                <Image
                    src={image_path + poster_path}
                    alt="image is not loaded from db"
                    height={800}
                    width={800}
                />
            </Link>
        </div >
    )
}