import Link from "next/link";

export function Header () {
    return <nav className="mb-5 bg-green-500 text-slate-50 text-center border-zinc-100 border-8 flex h-[60px] justify-center items-center">
        <ul>
            CouchSurfing Interview
        </ul>
        <ul className="mx-2">|</ul>
        <ul>
            <Link href="/users">Users</Link>
        </ul>
    </nav>
}