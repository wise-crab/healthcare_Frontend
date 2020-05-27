export default (state = {type: 'Loading'}, action)=>{
  switch (action.type){
    case 'LOGIN_REQUEST':
      console.log(`I'm in login Reducer `);
      // debugger
      return { ...state, user: action.payload };

    default: return state;
  }
}