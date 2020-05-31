import axios from 'axios';
import {
  fetchExamsByPatientSuccess,
  fetchExamsByPatientPending,
  fetchExamsByPatientError,
} from '../actions/patientActions';
import { getExamsById } from '../APIS/apis';
import getCookie from '../functions/getCookie';

function fetchExamsById(id) {
  return async (dispatch) => {
    dispatch(fetchExamsByPatientPending());
    const token = getCookie('token');
    try {
      const res = await axios.get(`${getExamsById}${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.error) {
        throw res.error;
      }
      dispatch(fetchExamsByPatientSuccess(res.data));
      return res.data;
    } catch (err) {
      console.log(err);
      dispatch(fetchExamsByPatientError(error));
    }
  };
}

export default fetchExamsById;
