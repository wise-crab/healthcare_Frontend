import React from 'react';
import { connect } from 'react-redux'
import '../assets/styles/sass/components/_sidebar.scss';
import logo from '../assets/img/logo.png';

const Sidebar = (props) => {
  const SIDEBAR_OPTIONS = {
    patient:['Exams List','Exams Results'],
    doctor:['Home','Patients List'],
    bacteriologist:['Home','Patient List'],
    admin:['Home','Users','Create user','Bulky Upload']
  }
  const role = props.patient[0].role
  const options = SIDEBAR_OPTIONS[role];
  console.log(props);
  
  
  return (
    <section className='sidebar'>
      <div className='sidebar__brand'>
        <img className='sidebar__brand-img' src={logo} alt='Examedic Logo' />
        <div className='sidebar__brand-title'>Examedic</div>
      </div>
      <section className='sidebar__nav'>
        <ol className='sidebar__menu'>
        {
          options.map((option, idx) => {
            return(
              <li key={idx} className='sidebar__menu-item'>
                <i>icon</i>
                <a href=''>{option}</a>
              </li>
            )
          })
        }
          
        </ol>
      </section>
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.patientsReducer;
}

export default connect(mapStateToProps)(Sidebar);
