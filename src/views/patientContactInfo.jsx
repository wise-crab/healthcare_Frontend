/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { connect } from 'react-redux';
import { getPatient, getExamsByPatient } from '../actions/doctorActions';

const patientContactInfo = (props) => {
  const idx = '5eccad8dcabbc60bcbeb5780';

  const handleGetPatientExams = (idx) => {
    getPatient(idx);
  };

  const data = props.exams || null;

  return (
    <div>
      {data !== null ? (
        data.map((exam, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <h3>{exam.typeOfExam}</h3>
              <h3>{exam.registrationDate}</h3>
              <h3>{exam.status}</h3>
            </div>
          );
        })
      ) : (
        <button
          className='button--icon'
          type='button'
          onClick={() => handleGetPatientExams(idx)}
        >
          Click Me to get Exams
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exams: state.doctorReducer.exams,
  };
};

const mapDispatchToProps = {
  getExamsByPatient,
};

export default connect(mapStateToProps, mapDispatchToProps)(patientContactInfo);
