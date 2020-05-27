import axios from 'axios';

export const loginRequest = payload => {
  console.log(payload);

  return (dispatch)=>dispatch({
    type: 'LOGIN_REQUEST',
    payload,
  })
}

export const loginUser = ({username, password}) => {
    
  return (dispatch) => {
    axios.post('http://localhost:3000/login', {
      username,
      password,
    })
      .then(({data})=>{
        document.cookie = `role=${data.data.userRol}`
        document.cookie = `token=${data.data.token}`
      
        const redirect = `/${data.data.userRol}`;
        window.location.href = redirect;
        dispatch(loginRequest(data.data))
      })
      .then(()=>{
      })
      .catch( (err) => dispatch(console.error(err)));
  }

}
