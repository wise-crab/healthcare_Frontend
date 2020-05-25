import { getUserByID, examsList } from '../APIS/apis';
import { GET_EXAMS_LIST } from '../types/examsTypes';

export const getUsersList = () => async (dispatch) => {
  const users = await fetch(getUserByID)
  console.log(users);
  
  dispatch({
    type: 'GET_USERS_LIST',
    payload: users.data
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
    console.log('Error:', error.message);
  }
};