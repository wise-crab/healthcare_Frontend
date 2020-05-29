import React, { useState, useMemo} from 'react';
import { connect } from "react-redux";
import { getExamsByPatient } from '../actions/doctorActions'
import '../assets/styles/sass/components/_search.scss';


const ExamsByPacient = (props) => {
  const idx = '5ed143fcd838312e56c9de71'
  
  const getPatientExams = (id) =>{
    props.getExamsByPatient(id);    
  }  
  const data = props.exams.exmas || null;
  debugger
  console.log(data);

  return (
    <div>
      <button className='button--icon' onClick={getPatientExams(idx)}></button>
      {(data !== null)? <div>{data.nombre}</div>: null}
    </div>
  );

  
};

const mapStateToProps = (state) => {
  return {
    exams: state.doctorReducer,
  }
}

const mapDispatchToProps = {
  getExamsByPatient,
};

export default connect (mapStateToProps,mapDispatchToProps)(ExamsByPacient);
