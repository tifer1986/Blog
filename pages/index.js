import Link from 'next/link'

function HomePage() {
    return (
        <div>   
            Welcome to Next.Js!
            <p>Read <Link href="/posts/first-post"><a>this page!</a></Link></p>
        </div>
    )
}

export default HomePage