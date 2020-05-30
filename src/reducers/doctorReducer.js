import { SEARCH_PATIENT, GET_EXAMS_BY_PATIENT } from '../types/doctorTypes';

const INITIAL_STATE = {
  data: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_PATIENT:
      return {
        ...state,
        patient: action.payload,
      };
    case GET_EXAMS_BY_PATIENT:
      return {
        ...state,
        exmas: action.payload,
      };
    default:
      return state;
  }
};
