
import usersMockData from './users-mock-data';
import { DataBaseError } from '../errors/errors';

/**
 * Basic example of a user.
 */


// TODO: If there's time left I woudl implement the friends step.
type Friend = { user_id: number }

export interface User {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    avatar?: string;
}

interface Query {
    where : User
}

async function findMany () : Promise<User[]> {
    return usersMockData
}

function findFirst (query : Query) : User {

    if (query === undefined) {
        throw new DataBaseError("Missing argument: query")
    }
    const { where } = query ?? {}
    const { id } = where ?? -1

    if (id === -1) { 
        return {} 
    }
    console.log("Yes", usersMockData)
    return usersMockData.map((user: User) => {
        if (user.id === id) {
            return user
        } else {
            return null
        }
    })[0]
}


export {
    findMany,
    findFirst
}




