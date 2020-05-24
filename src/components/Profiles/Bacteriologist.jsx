import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from '../Navbar';
import Search from '../Search'
import '../../assets/styles/sass/components/_main.scss';

const Bacteriologist = ({ children, history }) => {
  let styles = {};
  if (history.location.pathname === '/') {
    styles = { marginLeft: '0' };
  }

  return(
    <section className='main-wrapper' style={styles}>
      <Search />
      <div className='main-content'>{children}</div>
    </section>
  );
};
export default withRouter(Bacteriologist);
