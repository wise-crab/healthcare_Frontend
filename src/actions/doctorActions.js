import { patientsList } from '../APIS/apis';
import axios from 'axios';
import getCookie from '../functions/getCookie'
import { ADD_EXAM, SEARCH_PATIENT, GET_EXAMS_BY_PATIENT } from '../types/doctorTypes'

// axios.defaults.withCredentials = true;

export const getPatientsList = payload => ({
  type: 'GET_PATIENT_LIST',
  payload: payload,
});

export const listFromURL = () => {
  return (dispatch) =>{
    const token = getCookie('jwt')
    console.log(token);
    
    axios(
      patientsList,
      {headers: { Authorization: `Bearer ${token}` }}
      ).then(({data}) =>{
      console.log(data);
      dispatch(getPatientsList(data.data))
      }
    )
      

  }
};

// export const getPatientByID = () => async (dispatch) => {
//   try {
//     const exams = await fetch(patientsList);
//     console.log(exams);
    
//     dispatch({
//       type: GET_EXAMS_LIST,
//       payload: exams.data
//     })
//   } catch (err) {
//     console.error(err.message);
//   }
// };