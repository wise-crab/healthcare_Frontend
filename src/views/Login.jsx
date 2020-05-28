import React from 'react';
import logo from '../assets/img/Brand-icon-horizontal.png';
import '../assets/styles/sass/views/__login.scss';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className='login-card'>
      <h1>Sign In</h1>
      <section className='login card'>
        <section className='login__container'>
          <div className='login__container-logo'>
            <img src={logo} alt='logo' />
          </div>
          <form className='login__container-form' onSubmit={handleSubmit}>
            <label htmlFor='username'>Nombre de usuario</label>
            <input
              id='username'
              name='username'
              className='input'
              type='text'
              placeholder='Username'
            />
            <label htmlFor='password'>Contraseña</label>
            <input
              id='password'
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
              <a href='/' id='forgot'>
                Forgot password
              </a>
            </div>
            <button className='button' type='submit'>
              Login
            </button>
          </form>
        </section>
      </section>
    </div>
  );
};
export default Login;
