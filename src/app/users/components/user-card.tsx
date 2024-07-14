
import { User } from "@/persistance"
import Link from "next/link"

interface Props {
    user : User
}

export default async function ({ user } : Props) {

    return <Link href={"/users/"+ user.id}>
        <div className="h-[200px] w-[500px] bg-zinc-50 flex justify-center items-center gap-4 border-zinc-600 border-8">
            <div className="h-[100px] w-[100px] bg-red-400">
                <img src={user.avatar}/>
            </div>
            <div className="">
                <div className="text-center">
                    <b>{user.name}</b>
                </div>
                <div>{user.email}</div>
            </div>
        </div>
    </Link>

}