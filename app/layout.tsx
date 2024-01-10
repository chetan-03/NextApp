import './global.css'
import { Montserrat } from 'next/font/google'


const montserrat = Montserrat({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: '--font-montserrat'
})
export default function RootLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    return (
        <html lang="en" className={`${montserrat.className} mx-32 ny-12`}>
            <body>
                <nav>
                    <h1>logo</h1>
                    <ul>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </nav>

                {children}
            </body>
        </html>
    )
}
