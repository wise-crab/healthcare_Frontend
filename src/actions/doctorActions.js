import { patientsList, getUser} from '../APIS/apis';
import axios from 'axios';
import getCookie from '../functions/getCookie'
import { ADD_EXAM, SEARCH_PATIENT, GET_EXAMS_BY_PATIENT } from '../types/doctorTypes'
import { ERROR, LOADING } from '../types/asyncTypes'

export const getPatientsList = payload => ({
  type: GET_EXAMS_BY_PATIENT,
  payload: payload,
});



export const getPatient = ({id}) => { 
  return async (dispatch)=> {
  dispatch({
    type: LOADING
  });
  const URL = `${getUser}${id}`
  const token = getCookie('jwt')
  try {
    const res = await axios.get(URL,{
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({
      type: SEARCH_PATIENT,
      payload: res.data.data
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
}}