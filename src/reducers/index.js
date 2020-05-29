import { combineReducers } from 'redux';
import patientReducer from './patientReducer';
import authReducer from './authReducer';
import bacteriologistReducer from './bacteriologistReducer'
import adminReducer from './adminReducer'
import doctorReducer from './doctorReducer'

export default combineReducers({
  patientReducer,
  authReducer,
  adminReducer,
  doctorReducer,
  bacteriologistReducer,
});