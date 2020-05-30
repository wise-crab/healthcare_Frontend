import React from 'react';
import { connect } from 'react-redux';
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from '../types/sidebarTypes';
import '../assets/styles/sass/components/_navbar.scss';
import logo from '../assets/img/logo.png';

const Navbar = (props) => {
  const handleSidebar = () => {
    props.sidebar.open ? props.close_sidebar() : props.open_sidebar();
  };

  return (
    <nav className='navbar'>
      <div className='navbar__brand'>
        <img className='navbar__brand-logo' src={logo} alt='Logo' />
        <div className='navbar__brand-title'>Examedic</div>
      </div>
      <h3 className='navbar__title'>Clinical Examination Management System</h3>
      <div className='navbar__buttons'>
        <button
          className={`button--icon ${props.sidebar.open && 'open'}`}
          onClick={() => handleSidebar()}
        >
          <i className='fa fa-bars'></i>
        </button>
      </div>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    open_sidebar: () => dispatch({ type: SIDEBAR_OPEN }),
    close_sidebar: () => dispatch({ type: SIDEBAR_CLOSE }),
  };
};

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
