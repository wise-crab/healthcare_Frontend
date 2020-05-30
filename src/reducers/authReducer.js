import { LOGIN_REQUEST, LOGOUT_REQUEST, LOADING, ERROR } from '../types/authTypes'

export default (state = { 
  patient: [
    {
      $oid: '5ec6c34efc13ae0f3a00002c',
      cdi: '0129194190',
      name: 'Petrina',
      last_name: 'Causbey',
      email: 'pcausbey4@tinyurl.com',
      phone: '142-427-3406',
      role: 'patient',
    },

  ],
}, action)=>{
  switch (action.type){
    case 'LOGIN_REQUEST':
      console.log(`I'm in login Reducer `);

      return { ...state, user: action.payload };

    default: return state;
  }
}