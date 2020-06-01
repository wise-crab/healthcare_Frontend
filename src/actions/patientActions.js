export const FETCH_EXAMS_PENDING = 'FETCH_EXAMS_PENDING';
export const FETCH_EXAMS_SUCCESS = 'FETCH_EXAMS_SUCCESS';
export const FETCH_EXAMS_ERROR = 'FETCH_EXAMS_ERROR';

export const fetchExamsByPatientPending = () => ({
  type: FETCH_EXAMS_PENDING,
});

export const fetchExamsByPatientSuccess = (exams) => ({
  type: FETCH_EXAMS_SUCCESS,
  payload: exams.data,
});

export const fetchExamsByPatientError = (error) => ({
  type: FETCH_EXAMS_ERROR,
  payload: { error },
});
