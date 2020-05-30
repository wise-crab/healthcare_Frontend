import { GET_USERS, ADD_USER, READ_USER, UPDATE_USER, DELETE_USER, CSV_UPLOAD } from '../types/adminTypes'
import axios from 'axios';
import getCookie from '../functions/getCookie';
import { ERROR, LOADING } from '../types/asyncTypes';
import { updateUser } from '../APIS/apis';

export const updateUsers = (id, data) => { 
  return async (dispatch)=> {
  dispatch({
    type: LOADING
  });
  const _id = id.id;
  const URL = `${updateUser}${_id}`
  const token = getCookie('token')
  axios.defaults.headers.common ={'Authorization' : `Bearer ${token}`}
  try {
    const res = await axios.put(URL, {
      "numberId": data.numberId,
      "name": data.name,
      "lastName": data.lastName,
      "email": data.email,
      "contactNumber": data.contactNumber,
      "rol": data.rol
    });
    dispatch({
      type: UPDATE_USER,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
}}
