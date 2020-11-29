import { AUTHENTICATE_USER } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  userData: {}
}

export default function(state=initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: action.payload.validUser,
        userData: action.payload.userData
      }
    default:
      return state;
  }
}