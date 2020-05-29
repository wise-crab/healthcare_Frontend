import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Search from '../../components/Search'
import '../../assets/styles/sass/components/_main.scss';
import ExamsAssign from '../../components/ExamsAssign'
import { getPatient } from '../../actions/doctorActions'

const Doctor = ({ children, history }) => {
  let styles = {};
  if (history.location.pathname === '/') {
    styles = { marginLeft: '0' };
  }
  
  return(
    <section className='' style={styles}>
      <Search />
      <div className='main-content'>{children}</div>
    </section>
  );
};

const mapDispatchToProps = {
  getPatient
}


export default connect(null, mapDispatchToProps)(Doctor);
