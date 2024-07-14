export const revalidate = 420
import { User } from "@/persistance"
import UserCard from "./components/user-card";



const getData = async () => {
    const response = await fetch('http://localhost:3000/api/users')
    return response.json()
}

export default async function () {
    const users = await getData();
    return <div className="grid">

        {
            users.map((user : User) => {
                return <UserCard user={user} key={user.id}/>
            })
        }
    </div>
    
    return <h1>YES</h1>
}