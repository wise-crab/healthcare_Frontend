import axios from 'axios';
import { UPDATE_USER, GET_ROL } from '../types/adminTypes';
import getCookie from '../functions/getCookie';
import { ERROR, LOADING } from '../types/asyncTypes';
import { updateUser, usersByRol } from '../APIS/apis';

export const updateUsers = (id, data) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    const _id = id.id;
    const URL = `${updateUser}${_id}`;
    const token = getCookie('token');
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    try {
      const res = await axios.put(URL, {
        numberId: data.numberId,
        name: data.name,
        lastName: data.lastName,
        email: data.email,
        contactNumber: data.contactNumber,
        rol: data.rol,
      });
      dispatch({
        type: UPDATE_USER,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    }
  };
};

export const searchByrol = (form) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    const { rol } = form;
    const URL = `${usersByRol}${rol}`;
    const token = getCookie('token');
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    try {
      const res = await axios.get(URL);
      dispatch({
        type: GET_ROL,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    }
  };
};
