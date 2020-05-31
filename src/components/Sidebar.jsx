/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import '../assets/styles/sass/components/_sidebar.scss';
import logo from '../assets/img/logo.png';
import profilePicture from '../assets/img/user-profile.png';
import routes from '../routes/index';
import { persistor } from '../store';

const Sidebar = (props) => {
  const { role } = props.user;
  if (role == null) {
    return '';
  }
  const options = routes[role];
  function isCurrentRoute(route) {
    return props.location.pathname === route ? '--active' : '';
  }

  const logout = (event) => {
    persistor.purge();
  };

  return (
    <section className={`sidebar ${props.sidebar.open && 'open'}`}>
      <div className='sidebar__brand'>
        <img className='sidebar__brand-img' src={logo} alt='Examedic Logo' />
        <div className='sidebar__brand-title'>Examedic</div>
      </div>
      <section className='sidebar__nav'>
        <div className='sidebar__profile'>
          <img src={profilePicture} alt='profile picture' />
          <div>{`${props.user.name}  ${props.user.lastName}`}</div>
        </div>
        <ol className='sidebar__menu'>
          {options.map((option, idx) => {
            return (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className={`sidebar__menu-item${isCurrentRoute(option.path)}`}
              >
                <i className={option.icon} />
                <Link to={option.path}>{option.name}</Link>
              </li>
            );
          })}
          <li className='sidebar__menu-item'>
            <i className='fa fa-sign-out' />
            <a href='/' onClick={logout}>
              Logout
            </a>
          </li>
        </ol>
      </section>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.authReducer,
    sidebar: state.sidebar,
  };
};
export default withRouter(connect(mapStateToProps, null)(Sidebar));
