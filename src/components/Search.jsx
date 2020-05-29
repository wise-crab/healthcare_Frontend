import React, { useState, useMemo} from 'react';
import { connect } from "react-redux";
import { getPatientsList } from '../actions/patientsActions'
import '../assets/styles/sass/components/_search.scss';



const useSearchPatients = (patients) => {
  const [query, setQuery] = useState('');
  const [filteredPatients, setfilteredPatients] = useState(patients);

  useMemo(() =>{
    const result = patients.filter(patient => {
      return `${patient}`
    });

    setfilteredPatients(result);
  },[patients,query]);
  return { query, setQuery, filteredPatients };
}

const Search = (props) => {
  const patients = props.getPatientsList();
  console.log(patients);
  
  // const placeholder = `enter the patient ID or name`;
  // const { query, setQuery, filteredPatients } = useSearchPatients(patients);

  // if (filteredPatients.length === 0) {
    // return (
    //   <section className='search' id='search-component'>
    //     <input 
    //       type='text'
    //       className='form-control'
    //       placeholder={placeholder}
    //       value = {query}
    //       onChange={ e => {
    //         setQuery(e.target.value);
    //       }}
    //     />
    //     <button className='button--icon'>
    //       <i className='fa fa-search'></i>
    //     </button>
    //     <h3> No patients were Found </h3>
    //   </section>

    // );
  // }
  return (
    <div className='PatientList'>

    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    patients: state.patients,
  }
}

const mapDispatchToProps = {
  getPatientsList,
};

export default connect (mapStateToProps,mapDispatchToProps)(Search);
