import React from 'react';
import { withRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import '../assets/styles/sass/views/_layout.scss';

const Layout = ({ children, history }) => {
  return (
    <section className='layout'>
      {history.location.pathname !== '/'}
      <Main>{children}</Main>
    </section>
  );
};

export default withRouter(Layout);
