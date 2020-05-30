import axios from "axios";
import { loginURL } from "../APIS/apis";
import { LOGIN_REQUEST } from "../types/authTypes";

export const loginRequest = (payload) => {
  return (dispatch) =>
    dispatch({
      type: LOGIN_REQUEST,
      payload,
    });
};

export const loginUser = ({ username, password, history }) => {
  console.log(loginURL);

  return (dispatch) => {
    axios
      .post(loginURL, {
        username,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        const role = data.data.userRol;
        document.cookie = `role=${role}`;
        document.cookie = `token=${data.data.token}`;
        const redirect = `/${role}`;
        dispatch(loginRequest(data.data));
        history.push(redirect);
      })
      .then(() => {})
      .catch((err) => dispatch(console.error(err)));
  };
};
