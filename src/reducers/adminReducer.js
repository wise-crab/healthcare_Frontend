import {
  GET_USERS,
  UPDATE_USER,
  GET_ROL,
  CSV_UPLOAD,
  ADD_USER,
} from '../types/adminTypes';

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_USER:
      break;
    case GET_USERS:
      return INITIAL_STATE;
    case CSV_UPLOAD:
      return { ...action.payload };

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
