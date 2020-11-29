import { AUTHENTICATE_USER } from './types';

export const authenticateUser = (validUser, userData) => {
     return {
        type: AUTHENTICATE_USER,
        payload: { validUser: validUser, userData: userData }
    }
}