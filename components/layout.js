import Head from "next/head"
import Link from "next/link"

let Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <ul>
                    <li>
                        <Link href={"/"}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/api/movies"}>
                            <a>Api Movies</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/movies"}>
                            <a>Movies</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/top"}>
                            <a>Top</a>
                        </Link>
                    </li>
                </ul>
            </header>
            <div>{children}</div>
            <style jsx>{`
                header {
                    width: 85%;
                    height: 125px;
                    margin: 3% auto 0% auto;
                    background-color: #0070f3;
                }
                ul {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                li, a {
                    color: white;
                    font-weight: bold;
                    text-decoration: none;
                }
                a:hover {
                    font-style: italic;
                }
            `}</style>
        </div>
    )
}

export default Layout
