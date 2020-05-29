import { UPLOAD_RESULTS, SEARCH_PATIENT, GET_EXAMS_BY_PATIENT } from '../types/bacteriologistTypes'

const INITIAL_STATE = {
  patients:[]
};

export default (state= INITIAL_STATE, action) =>{
  switch (action.type) {
    case SEARCH_PATIENT:
      break;
  
    default:
      return state;
  }
}