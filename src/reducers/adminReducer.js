import { GET_USERS, ADD_USER, READ_USER, UPDATE_USER, DELETE_USER, CSV_UPLOAD } from '../types/adminTypes'

const INITIAL_STATE = {
  users:[]
};

export default (state= INITIAL_STATE, action) =>{
  switch (action.type) {
    case GET_USERS:
      break;
  
    default:
      return state;
  }
}