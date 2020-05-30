import { GET_USERS } from '../types/adminTypes';

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return INITIAL_STATE;
    
      case UPDATE_USER:
      return {
        ...state,
        data: action.payload,
      }     

    default:
      return state;
  }
};
