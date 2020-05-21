import React from 'react';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import '../assets/styles/sass/views/_layout.scss';

const Layout = ({ children }) => {
  return (
    <section className='layout'>
      <Sidebar />
      <Main>{children}</Main>
    </section>
  );
};

export default Layout;
