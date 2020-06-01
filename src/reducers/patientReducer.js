import {
  FETCH_EXAMS_ERROR,
  FETCH_EXAMS_PENDING,
  FETCH_EXAMS_SUCCESS,
} from '../actions/patientActions';

const initialState = {
  pending: false,
  exams: [],
  error: null,
};

export default function patientReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EXAMS_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };

    case FETCH_EXAMS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        pending: false,
        exams: action.payload,
      };

    case FETCH_EXAMS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        pending: false,
        error: action.payload.error,
        exams: [],
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
