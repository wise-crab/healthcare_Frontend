import React from 'react';
import logo from '../assets/img/Brand-icon-horizontal.png';
import '../assets/styles/sass/views/__login.scss';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
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
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Password'
          />
          <div className='login__container-remember-me'>
            <label>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Remember me
            </label>
            <a href='/'>Forgot the password</a>
          </div>
          <button className='button' type='submit'>
            LOGIN
          </button>
        </form>
      </section>
    </section>
  );
};
export default Login;
