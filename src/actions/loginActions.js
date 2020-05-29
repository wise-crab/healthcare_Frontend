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
