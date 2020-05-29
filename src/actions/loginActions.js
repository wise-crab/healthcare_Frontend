import axios from 'axios';

export const loginRequest = (payload) => {
  return (dispatch) =>
    dispatch({
      type: 'LOGIN_REQUEST',
      payload,
    });
};

export const loginUser = ({ username, password, history }) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3000/login', {
        username,
        password,
      })
      .then(({ data }) => {
        document.cookie = `role=${data.data.userRol}`;
        document.cookie = `token=${data.data.token}`;
        const redirect = `/${data.data.userRol}`;
        dispatch(loginRequest(data.data));
        history.push(redirect);
      })
      .then(() => {})
      .catch((err) => dispatch(console.error(err)));
  };
};
