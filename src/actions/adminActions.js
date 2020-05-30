import axios from 'axios';
import { csvUpload } from '../APIS/apis';
import { CSV_UPLOAD, CSV_UPLOAD_SUCESS } from '../types/adminTypes';

const uploadUsers = (data, history) => {
  return async (dispatch) => {
    dispatch({
      type: CSV_UPLOAD,
    });
    console.log(data);
    const URL = `${csvUpload}`;
    try {
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

export default uploadUsers;
