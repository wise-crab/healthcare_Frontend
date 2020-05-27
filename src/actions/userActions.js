import axios from 'axios';
import { Redirect } from 'react-router-dom';

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
})

export const loginUser = ({username, password}, redirect) => {
  console.log(`username: ${username} \n password: ${password}`);
  
  return (dispatch) => {
    axios.post('http://localhost:3000/login', {
      username,
      password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

}
