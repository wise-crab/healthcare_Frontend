import React from 'react';
import '../assets/styles/sass/components/_sidebar.scss';
import logo from '../assets/img/logo.png';

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div className='sidebar__brand'>
        <img className='sidebar__brand-img' src={logo} alt='Examedic Logo' />
        <div className='sidebar__brand-title'>Examedic</div>
      </div>
      <section className='sidebar__nav'>
        <ul className='sidebar__menu'>
          <li className='sidebar__menu-item'>
            <i>icon</i>
            <a href=''>link</a>
          </li>
          <li className='sidebar__menu-item'>
            <i>icon</i>
            <a href=''>link</a>
          </li>
          <li className='sidebar__menu-item--active'>
            <i>icon</i>
            <a href=''>link</a>
          </li>
          <li className='sidebar__menu-item'>
            <i>icon</i>
            <a href=''>link</a>
          </li>
          <li className='sidebar__menu-item'>
            <i>icon</i>
            <a href=''>link</a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Sidebar;
