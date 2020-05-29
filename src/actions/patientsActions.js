import { patientsList } from '../APIS/apis';
import axios from 'axios';
import { GET_EXAMS_LIST } from '../types/examsTypes';

export const getPatientsList = () => {
  return (dispatch) =>{
    axios(patientsList).then(({data}) =>{
      console.log(data);
      
    })
    // type: 'GET_PATIENT_LIST',
    // payload: patients.data,
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