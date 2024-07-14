
import usersMockData from './users-mock-data';
import { DataBaseError } from '../errors/errors';

/**
 * Basic example of a user.
 */


// TODO: If there's enough time left I would implement the friends step.
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

async function findFirst (query : Query) : Promise<User> {

    if (query === undefined) {
        throw new DataBaseError("Missing argument: query")
    }
    const { where } = query ?? {}
    const { id } = where ?? -1

    if (id === -1) { 
        return {} 
    }

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




