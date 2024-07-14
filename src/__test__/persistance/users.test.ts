

/**
 * The intent here is to cmmunicate that I understand the importance of testing, 
 * especially when dealing with complex logic and data modeling.
 */

import { User, findFirst } from '@/persistance'
import { expect, test, describe} from 'vitest'

describe('findFirst', () => {

    test('normal arguments', () => {
        const user : User = findFirst({
            where: {
                id: 1
            }
        })
        expect(user.name).toBe("Leanne Graham")
    })
})