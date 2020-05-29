import { ADD_EXAM, SEARCH_PATIENT, GET_EXAMS_BY_PATIENT } from '../types/doctorTypes';

const INITIAL_STATE = {
  patient: {},
};

export default (state= INITIAL_STATE, action) =>{
  switch (action.type) {
    case SEARCH_PATIENT:
      return {
        ...state,
        patient: action.payload
      };
  
    default:
      return state;
  }
}