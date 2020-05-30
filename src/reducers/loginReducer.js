import { LOGIN_SET_USER } from "../types/authTypes";
const initialState = {
  $oid: "5ec6c34efc13ae0f3a00002c",
  cdi: "0129194190",
  name: "Petrina",
  last_name: "Causbey",
  email: "pcausbey4@tinyurl.com",
  phone: "142-427-3406",
  role: "patient",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SET_USER:
      return { ...action.payload, role: action.payload.rol };
    default:
      return state;
  }
};
