import { AUTHENTICATE_USER } from './types';

export const authenticateUser = (validUser) => {
     return {
        type: AUTHENTICATE_USER, payload: validUser
    }
}