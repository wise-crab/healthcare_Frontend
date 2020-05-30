import { LOGIN_SET_USER } from '../types/authTypes';

const initialState = {
  role: null,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SET_USER:
      return { ...action.payload, role: action.payload.rol };
    default:
      return state;
  }
};
