import axios from 'axios';
import getCookie from '../functions/getCookie';
import {
  // eslint-disable-next-line no-unused-vars
  ADD_EXAM,
  SEARCH_PATIENT,
  GET_EXAMS_BY_PATIENT,
} from '../types/doctorTypes';
import { ERROR, LOADING } from '../types/asyncTypes';
import { getUser } from '../APIS/apis';

export const getExamsByPatient = (id) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    const URL = `${examsByPatientURL}${id}`;
    const token = getCookie('token');
    try {
      const res = await axios.get(URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: GET_EXAMS_BY_PATIENT,
        payload: res.data.data,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: ERROR,
        payload: err.message,
      });
    }
  };
};

export const getPatient = ({ id }) => {
  return async (dispatch) => {
    dispatch({
      type: LOADING,
    });
    const URL = `${getUser}${id}`;
    const token = getCookie('token');
    axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
    debugger;
    try {
      const res = await axios.get(URL);
      dispatch({
        type: SEARCH_PATIENT,
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
