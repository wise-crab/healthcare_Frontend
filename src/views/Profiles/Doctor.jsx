import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from '../../components/Search'
import '../../assets/styles/sass/components/_main.scss';
import ExamsAssign from '../../components/ExamsAssign'

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
export default Doctor;
