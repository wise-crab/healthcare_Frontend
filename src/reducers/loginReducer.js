const initialState = {
  role: 'patient',
  name: 'user name',
  type: 'Loading',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...state, role: action.payload.userRol };
    default:
      return state;
  }
};
