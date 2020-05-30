import { SEARCH_PATIENT } from '../types/bacteriologistTypes';

const INITIAL_STATE = {
  patients: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_PATIENT:
      return state;

    default:
      return state;
  }
};
