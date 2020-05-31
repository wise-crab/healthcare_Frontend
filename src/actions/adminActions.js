/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  GET_USERS,
  GET_ROL,
  ADD_USER,
  READ_USER,
  UPDATE_USER,
  DELETE_USER,
  CSV_UPLOAD,
  CSV_UPLOAD_SUCESS,
} from '../types/adminTypes';
import { ERROR, LOADING } from '../types/asyncTypes';
import { csvUpload, updateUser, createUserURL, usersByRol } from '../APIS/apis';

import getCookie from '../functions/getCookie';

export const addUser = (form) => {
  const { name, last_name: lastName, email, cdi, phone, role } = form;
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    const token = getCookie('token');
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    const data = {
      numberId: cdi,
      name,
      lastName,
      email,
      contactNumber: phone,
      rol: role,
    };
    try {
      const res = await axios.post(createUserURL, data);
      alert(res.data.data);
      dispatch({
        type: ADD_USER,
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

export const uploadUsers = (data, history) => {
  return async (dispatch) => {
    dispatch({
      type: CSV_UPLOAD,
    });
    const URL = `${csvUpload}`;
    try {
      const token = getCookie('token');
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      await axios.post(URL, data);
      dispatch({
        type: CSV_UPLOAD_SUCESS,
      });
      history.push('/');
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
