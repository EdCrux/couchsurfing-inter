import Link from "next/link";

export function Header () {
    return <nav className="bg-slate-500 text-slate-50">
        <ul>
            CouchSurfing Interview
        </ul>
        <ul>
            <Link href="/users">Users</Link>
        </ul>
    </nav>
}