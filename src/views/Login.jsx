import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../assets/img/Brand-icon-horizontal.png';
import { loginUser } from '../actions/loginActions';
import '../assets/styles/sass/views/__login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    username: '',
    role: '',
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser({ ...form, history: props.history });
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Sign In</h2>
        <div className='login__container-logo'>
          <img src={logo} />
        </div>
        <form className='login__container-form' onSubmit={handleSubmit}>
          <input
            name='username'
            className='input'
            type='text'
            placeholder='Username'
            onChange={updateInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Password'
            onChange={updateInput}
          />
          <div className='login__container-remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Remember me
            </label>
          </div>
          <button className='button' type='submit'>
            LOGIN
          </button>
        </form>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);
