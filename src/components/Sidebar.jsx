import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import '../assets/styles/sass/components/_sidebar.scss';
import logo from '../assets/img/logo.png';
import profilePicture from '../assets/img/user-profile.png';
import routes from '../routes/index';

const Sidebar = (props) => {
  debugger
  const role = props.user.role;
  if (role == null) {
    return '';
  }
  const options = routes[role];
  function isCurrentRoute(route) {
    return props.location.pathname === route ? '--active' : '';
  }
  return (
    <section className={`sidebar ${props.sidebar.open && 'open'}`}>
      <div className='sidebar__brand'>
        <img className='sidebar__brand-img' src={logo} alt='Examedic Logo' />
        <div className='sidebar__brand-title'>Examedic</div>
      </div>
      <section className='sidebar__nav'>
        <div className='sidebar__profile'>
          <img src={profilePicture} alt='profile picture' />
          <div>{props.user.name + ' ' + props.user.lastName}</div>
        </div>
        <ol className='sidebar__menu'>
          {options.map((option, idx) => {
            return (
              <li
                key={idx}
                className={`sidebar__menu-item${isCurrentRoute(option.path)}`}
              >
                <i className={option.icon}></i>
                <Link to={option.path}>{option.name}</Link>
              </li>
            );
          })}
          <li className={`sidebar__menu-item`}>
            <i className='fa fa-sign-out'></i>
            <a href='#'>Salir</a>
          </li>
        </ol>
      </section>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.loginReducer,
    sidebar: state.sidebar,
  };
};
export default withRouter(connect(mapStateToProps, null)(Sidebar));