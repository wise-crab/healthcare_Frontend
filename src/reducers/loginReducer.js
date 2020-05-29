const initialState = {
  id: '5eccac3bcabbc60bcbeb577a',
  email: 'lucho-sky.3102@hotmail.com',
  name: 'juan',
  lastName: 'rodriguez',
  numberId: 2021561,
  contactNumber: 3185888791,
  role: 'patient',
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return { ...action.payload, role: action.payload.rol };
    default:
      return state;
  }
};
