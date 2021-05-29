import _ from 'lodash';
import {
  SIGN_IN,
  SIGN_OUT,
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

const INTIAL_STATE = {
  isSignedIn : null,
  userId:null 
}

export const authReducer = (state = INTIAL_STATE ,action) => {
  switch (action.type) {
      case SIGN_IN:
          return {...state, isSignedIn:true , userId:action.payload }
      case SIGN_OUT:
        return {...state , isSignedIn:false , userId:null}
      default :
       return state;   
  }
}; 



export const streamReducer =  (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
