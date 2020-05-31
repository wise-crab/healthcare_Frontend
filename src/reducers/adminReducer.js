import { ADD_USER } from '../types/adminTypes';

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      break;
  
    default:
      return state;
  }
};
