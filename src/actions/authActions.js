import axios from 'axios';
import { loginURL } from '../APIS/apis'
import { LOGIN_REQUEST, LOGOUT_REQUEST, LOADING, ERROR } from '../types/authTypes'

export const loginRequest = payload => {
  console.log(payload);

  return (dispatch)=>dispatch({
    type: LOGIN_REQUEST,
    payload,
  })
}

export const loginUser = ({username, password}) => {
    console.log(loginURL);
    
  return (dispatch) => {
    axios.post(loginURL, {
      username,
      password,
    })
      .then(({data})=>{
        console.log(data);
        document.cookie = `role=${data.data.userRol}`;
        document.cookie = `jwt=${data.data.token}`;      
        const redirect = `/${data.data.userRol}`;
        window.location.href = redirect;
        dispatch(loginRequest(data.data));
      })
      .then(()=>{
      })
      .catch( (err) => dispatch(console.error(err)));
  }

}
