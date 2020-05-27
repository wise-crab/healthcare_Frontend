import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
})

export const loginUser = ({username, password}, redirect) => {
  console.log(`username: ${username} \n password: ${password}`);
  
  return (dispatch) => {
    axios({
      url: 'http://localhost:3000/login',
      method: 'post',
      auth: {
        username,
        password
      },
    })
      .then(({data})=>{
        document.cookie = `token=${data.token}`
        document.cookie = `role=${data.userRol}`
        dispatch(loginRequest(data));
      })
      .then(()=>{
        window.location.href = redirect;
      })
      .catch(err => dispatch(setError(err)));
  }

}
