import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {authReducer ,streamReducer} from './appReducers';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams :streamReducer
});
