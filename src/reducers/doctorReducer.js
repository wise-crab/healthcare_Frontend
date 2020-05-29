import { ADD_EXAM, SEARCH_PATIENT, GET_EXAMS_BY_PATIENT } from '../types/doctorTypes';

const INITIAL_STATE = {
  patient: [
    {
      $oid: '5ec6c34efc13ae0f3a00002c',
      cdi: '0129194190',
      name: 'Petrina',
      last_name: 'Causbey',
      email: 'pcausbey4@tinyurl.com',
      phone: '142-427-3406',
      role: 'patient',
    },
  ],
};

export default (state= INITIAL_STATE, action) =>{
  switch (action.type) {
    case SEARCH_PATIENT:
      debugger
      return {
        ...state,
        patient: action.payload
      };
  
    default:
      return state;
  }
}