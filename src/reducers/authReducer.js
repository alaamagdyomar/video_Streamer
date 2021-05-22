import {SIGN_IN,SIGN_OUT} from '../actions/types';

const INTIAL_STATE = {
  isSignedIn : null
}

export const authReducer = (state = INTIAL_STATE ,action) => {
  switch (action.type) {
      case SIGN_IN:
          return {...state, isSignedIn:true}
      case SIGN_OUT:
        return {...state , isSignedIn:false}
      default :
       return state;   
  }
}; 