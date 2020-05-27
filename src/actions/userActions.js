import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
})

export const loginUser = ({username, password}, redirect) => {

  return (dispatch) => {
    axios.post('http://localhost:3000/login', {
      username,
      password,
    })
      .then(({data})=>{
        console.log(data.data);
        document.cookie = `token=${data.data.token}`
        document.cookie = `role=${data.data.userRol}`
      })
      .then(()=>{
        window.location.href = redirect;
      })
      .catch( (err) => dispatch(setError(err)));
  }

}
