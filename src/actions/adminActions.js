/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  GET_USERS,
  ADD_USER,
  READ_USER,
  UPDATE_USER,
  DELETE_USER,
  CSV_UPLOAD,
} from '../types/adminTypes';
import { ERROR, LOADING } from '../types/asyncTypes';
import { createUserURL } from '../APIS/apis';

import getCookie from '../functions/getCookie';

export const addUser = (form) => {
  const { name, lastName: last_name, email, cdi, phone, role } = form;
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    const token = getCookie('token');
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    const data = {
      numberId: cdi,
      name,
      lastName: last_name,
      email,
      contactNumber: phone,
      rol: role,
    };
    try {
      const res = await axios.post(createUserURL, data);
      dispatch({
        type: ADD_USER,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    }
  };
};

export const succeded = (payload) => {};
