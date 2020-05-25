const INITIAL_STATE = {
  patient: [
    {
      "$oid": "5ec6c34efc13ae0f3a00002c",
      "cdi": "0129194190",
      "name": "Petrina",
      "last_name": "Causbey",
      "email": "pcausbey4@tinyurl.com",
      "phone": "142-427-3406",
      "role": "admin"
      }
  ]
};

export default (state = INITIAL_STATE, action)=>{
  switch (action.type){
    case 'GET_PATIENT':
      return { ...state, patients: action.payload };

    default: return state;
  }
}