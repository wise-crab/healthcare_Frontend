import { combineReducers } from 'redux';
import usersReducer from './patientsReducer';
import examsReducer from './examsReducer'

export default combineReducers({
  usersReducer
});