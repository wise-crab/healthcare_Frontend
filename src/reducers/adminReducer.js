import { GET_USERS, UPDATE_USER, GET_ROL } from '../types/adminTypes';

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
      };
    case GET_ROL:
      return {
        ...state,
        users: action.payload.data,
      };

    default:
      return state;
  }
};
