import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from '../../components/Search'
import '../../assets/styles/sass/components/_main.scss';
import Sidebar from '../../components/Sidebar'

const Bacteriologist = ({ children, history }) => {
  let styles = {};
  if (history.location.pathname === '/') {
    styles = { marginLeft: '0' };
  }

  return(
    <section className='' style={styles}>
      <Search />
    </section>
  );
};
export default withRouter(Bacteriologist);
