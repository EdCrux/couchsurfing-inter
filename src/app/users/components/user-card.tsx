import { User } from "@/persistance"

interface Props {
    user : User
}


export default async function ({ user } : Props) {

    return <div className="h-[200px]">
        <div className="h-[100px] w-[100px]">
            <img src={user.avatar}/>
        </div>
        <div>
            {user.name}
        </div>
    </div>

}