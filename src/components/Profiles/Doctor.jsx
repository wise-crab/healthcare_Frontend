import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from '../Search'
import '../../assets/styles/sass/components/_main.scss';
import Sidebar from '../Sidebar'

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
export default withRouter(Doctor);
