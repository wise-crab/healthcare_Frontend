import React from 'react';
import '../assets/styles/sass/views/_profile.scss';

const Profile = (props) => (
  <div>
    <h1>Mi perfil</h1>
    <section className='profile card'>
      <div className='profile__content'>
        <div className='profile__content-avatar'>
          <img src='https://via.placeholder.com/64x64x' alt='avatar' />
        </div>
        <div className='profile__content-info'>
          <h4>Name Surname</h4>
          <p>Document Number</p>
        </div>
      </div>
    </section>

    <form action='#' className='profile-form card'>
      <h4>Formulario de cambio de contraseña</h4>
      <label htmlFor='current_password'>Contraseña Actual</label>
      <input
        type='password'
        name='current_password'
        placeholder='contraseña actual'
      />
      <label htmlFor='new_password'>Nueva Contraseña</label>
      <input
        type='password'
        name='new_password'
        placeholder='nueva contraseña'
      />
      <label htmlFor='new_password_confirm'>Confirmar Contraseña</label>
      <input
        type='password'
        name='new_password_confirm'
        placeholder='confirmar contraseña'
      />
      <button className='button'>Actualizar</button>
    </form>
  </div>
);

export default Profile;
