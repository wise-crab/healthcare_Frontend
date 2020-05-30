import {
  LOGIN_REQUEST,
  LOGIN_SET_USER,
  LOGOUT_REQUEST,
  LOADING,
  ERROR,
} from "../types/authTypes";

export default (
  state = {
    patient: [
      {
        $oid: "5ec6c34efc13ae0f3a00002c",
        cdi: "0129194190",
        name: "Petrina",
        last_name: "Causbey",
        email: "pcausbey4@tinyurl.com",
        phone: "142-427-3406",
        role: "patient",
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
