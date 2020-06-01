import axios from './axios';
import { getUser, getExamsByPatientId } from '../APIS/apis';

export const searchPatient = (document) => {
  const url = `${getUser}${document}`;
  return axios(url)
    .then((response) => response.data)
    .then((data) => {
      if (data.data != null) {
        return data.data.rol === 'patient' ? data.data : null;
      }
      return null;
    })
    .catch((error) => console.error(`something wrong happen ${error}`));
};

export const getPendingExamsByPatientId = (id) => {
  const URL = `${getExamsByPatientId}${id}`;
  return axios(URL).then((data) => data.data.data);
};
