export default (state, action)=>{
  switch (action.type){
    case 'LOGIN_REQUEST':      
      return { ...state, user: action.payload };

    default: return state;
  }
}