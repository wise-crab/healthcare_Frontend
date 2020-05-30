import axios from 'axios';
import { loginURL } from '../APIS/apis';
import { LOGIN_SET_USER } from '../types/authTypes';

export const loginRequest = (payload) => {
  return (dispatch) => dispatch({
    type: LOGIN_SET_USER,
    payload,
  });
};

export const loginUser = ({ username, password, history }) => {
  return (dispatch) => {
    axios
      .post(`${loginURL}`, {
        username,
        password,
      })
      .then(({ data }) => {
        const role = data.data.userData.rol;
        document.cookie = `role=${role}`;
        document.cookie = `token=${data.data.token}`;
        const redirect = `/${role}`;
        dispatch(loginRequest(data.data.userData));
        history.push(redirect);
      })
      .then(() => {})
      .catch((err) => dispatch(console.error(err)));
  };
};
