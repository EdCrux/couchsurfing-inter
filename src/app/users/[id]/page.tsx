import UserCard from "../components/user-card"

interface Props {
    params : {
        id: string;
    };
}

const getData= async (id : string) => {    
    const response = await fetch(`http://localhost:3000/api/users/${id}`)
    return response.json()
}

export default async function ({ params }: Props) {
    const user = await getData(params.id)
    return <div className="h-screen w-full flex justify-center items-center">
            <UserCard user={user} />
    </div> 
}