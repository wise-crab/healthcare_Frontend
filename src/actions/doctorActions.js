import { patientsList, getUser} from '../APIS/apis';
import axios from 'axios';
import getCookie from '../functions/getCookie'
import { ADD_EXAM, SEARCH_PATIENT, GET_EXAMS_BY_PATIENT } from '../types/doctorTypes'
import { ERROR, LOADING } from '../types/asyncTypes'

export const getPatientsList = payload => ({
  type: GET_EXAMS_BY_PATIENT,
  payload: payload,
});

export const listFromURL = () => {
  return (dispatch) =>{
    const token = getCookie('jwt')
    
    axios(
      patientsList,
      {headers: { Authorization: `Bearer ${token}` }}
      ).then(({data}) =>{
      console.log(`data= ${data.data}`);
      dispatch(getPatientsList(data.data))
      }
    )
      

  }
};

export const getPatient = ({id}) => {
  
  return (dispatch)=> {
  dispatch({
    type: LOADING
  });
  const URL = `${getUser}${id}`
  const token = getCookie('jwt')
  searchPatient(URL,token);
}}

export const searchPatient = async (URL,token) => {
  try {
    const res = await axios.get(URL,{
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({
      type: SEARCH_PATIENT,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.message
    });
  }
  
}