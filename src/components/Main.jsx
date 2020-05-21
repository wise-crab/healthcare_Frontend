import React from 'react';
import Navbar from './Navbar';
import '../assets/styles/sass/components/_main.scss';

const Main = ({ children }) => {
  return (
    <section className='main-wrapper'>
      <Navbar />
      <div className='main-content'>{children}</div>
    </section>
  );
};

export default Main;
