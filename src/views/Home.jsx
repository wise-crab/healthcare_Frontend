import React from 'react';
import { connect } from 'react-redux'
import Doctor from '../components/Profiles/Doctor';
import Patient from '../components/Profiles/Patient';
import Admin from '../components/Profiles/Admin';
import Bacteriologist from '../components/Profiles/Bacteriologist';
                              
const Home = () => {
  const role = this;
  console.log(role);
  
  return (
    <section className='doctor card'>
      {/* {role == 'patient' && <Patient />}
      {role == 'doctor' && <Doctor />}
      {role == 'admin' && <Admin />}
      {role == 'bacteriologist' && <Bacteriologist />} */}
    </section>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
}

export default connect (mapStateToProps, null) (Home);