import { getUserByID, examsList } from '../APIS/apis';
import { GET_EXAMS_LIST } from '../types/examsTypes';

export const getUsersList = () => async (dispatch) => {
  const users = await fetch(getUserByID);
  dispatch({
    type: 'GET_USERS_LIST',
    payload: users.data,
  })
};

export const getExamsList = () => async (dispatch) => {
  try {
    const exams = await fetch(examsList);
    dispatch({
      type: GET_EXAMS_LIST,
      payload: exams.data
    })
  } catch (err) {
    console.error(err.message);
  }
};