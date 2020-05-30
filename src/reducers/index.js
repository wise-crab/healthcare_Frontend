import { combineReducers } from 'redux';
import patientReducer from './patientReducer';
import authReducer from './authReducer';
import bacteriologistReducer from './bacteriologistReducer';
import adminReducer from './adminReducer';
import doctorReducer from './doctorReducer';
import loginReducer from './loginReducer';
import sidebar from './sidebar';

export default combineReducers({
  patientReducer,
  authReducer,
  adminReducer,
  doctorReducer,
  bacteriologistReducer,
  loginReducer,
  sidebar,
});
