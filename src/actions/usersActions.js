import { getUserByID } from '../APIS/apis';

export const getUsersList = () => async (dispatch) => {
  const exams = await fetch(getUserByID)
  console.log(exams);
  
  dispatch({
    type: 'GET_USERS_LIST',
    payload: exams.data
  })
};