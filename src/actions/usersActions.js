export const getUsersList = () => (dispatch) => {
  dispatch({
    type: 'GET_USERS_LIST',
    payload: [1,2,3]
  })
};