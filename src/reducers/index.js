import { combineReducers } from 'redux';
import authReducer from './authReducer';
import patientReducer from './patientReducer';
import bacteriologistReducer from './bacteriologistReducer';
import adminReducer from './adminReducer';
import doctorReducer from './doctorReducer';
import sidebar from './sidebar';

export default combineReducers({
  patientReducer,
  authReducer,
  adminReducer,
  doctorReducer,
  bacteriologistReducer,
  sidebar,
});
