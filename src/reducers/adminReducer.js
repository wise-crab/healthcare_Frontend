<<<<<<< HEAD
import { GET_USERS, UPDATE_USER, GET_ROL } from '../types/adminTypes';
=======
import { GET_USERS, CSV_UPLOAD, UPDATE_USER } from '../types/adminTypes';
>>>>>>> 7219cfa05a4dade9e9e365669aacbcec2a290a1b

const INITIAL_STATE = {
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return INITIAL_STATE;
<<<<<<< HEAD
=======
    case CSV_UPLOAD:
      return { ...action.payload };
>>>>>>> 7219cfa05a4dade9e9e365669aacbcec2a290a1b

    case UPDATE_USER:
      return {
        ...state,
        data: action.payload,
      };
<<<<<<< HEAD
    case GET_ROL:
      return {
        ...state,
        users: action.payload.data,
      };
=======
>>>>>>> 7219cfa05a4dade9e9e365669aacbcec2a290a1b

    default:
      return state;
  }
};
