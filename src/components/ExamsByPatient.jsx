/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import { connect } from 'react-redux';
import { getExamsByPatient } from '../actions/doctorActions';
import '../assets/styles/sass/components/_search.scss';

const ExamsByPacient = (props) => {
  const idx = '5ed143fcd838312e56c9de71';

  const getPatientExams = (id) => {
    props.getExamsByPatient(id);
  };
  const data = props.exams.exmas || null;

  return (
    <div>
      <button
        className='button--icon'
        type='button'
        onClick={() => getPatientExams(idx)}
      />
      {data !== null ? <div>{data.nombre}</div> : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    exams: state.doctorReducer,
  };
};

const mapDispatchToProps = {
  getExamsByPatient,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExamsByPacient);
