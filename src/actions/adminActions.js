import axios from 'axios';
import { getUser } from '../APIS/apis';
import { CSV_UPLOAD, CSV_UPLOAD_SUCESS } from '../types/adminTypes';

const uploadUsers = ({ data }) => {
  return async (dispatch) => {
    dispatch({
      type: CSV_UPLOAD,
    });
    const URL = `${getUser}${id}`;
    const token = getCookie('jwt');
    try {
      await axios.post(URL, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch({
        type: CSV_UPLOAD_SUCESS,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.message,
      });
    }
  };
};

export default uploadUsers;
