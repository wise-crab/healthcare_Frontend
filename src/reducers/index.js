import { combineReducers } from 'redux';
import patientsReducer from './patientsReducer';
import examsReducer from './examsReducer'

export default combineReducers({
  patientsReducer
});