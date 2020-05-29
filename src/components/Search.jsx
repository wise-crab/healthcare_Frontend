import React, { useState, useMemo} from 'react';
import { connect } from "react-redux";
import { getPatient } from '../actions/doctorActions'
import '../assets/styles/sass/components/_search.scss';

const Search = (props) => {
  
  const placeholder = `enter the patient ID or name`;
  
  const [form, setValues] = useState({
    searchField:''
  })

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSearch = (event) => {
    event.preventDefault();
    props.getPatient(form)
  }
  return (
    <section >
      <form className='search' id='search-component' onSubmit={handleSearch}>
        <input
          name='id'
          onChange={updateInput}
          type='text'
          className='input'
          placeholder={placeholder}
        />
        <button className='button--icon' type='submit'>
          <i className='fa fa-search'></i>
        </button>
      </form>
    </section>
  );
  
};

const mapStateToProps = (state) => {
  return {
    patient: state.patient,
  }
}

const mapDispatchToProps = {
  getPatient,
};

export default connect (mapStateToProps,mapDispatchToProps)(Search);
