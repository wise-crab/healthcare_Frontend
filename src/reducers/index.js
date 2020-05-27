import { combineReducers } from 'redux';
import patientsReducer from './patientsReducer';
import loginReducer from './loginReducer';
import examsReducer from './examsReducer'

export default combineReducers({
  patientsReducer
});