import React from 'react';
import '../assets/styles/sass/views/_createUser.scss';

const CreateUser = () => {
  return (
    <>
      <h1>Creación de usuarios</h1>
      <section className='create-user-form card'>
        <h4 className='create-user-form__title'>
          Formulario de creación de roles
        </h4>
        <div className='create-user-form__row'>
          <div className='create-user-form__form-group'>
            <label htmlFor='name'>Nombre</label>
            <input type='text' name='name' id='name' placeholder='Nombre' />
          </div>
          <div className='create-user-form__form-group'>
            <label htmlFor='last_name'>Apellidos</label>
            <input
              type='text'
              name='last_name'
              id='last_name'
              placeholder='Apellidos'
            />
          </div>
        </div>
        <div className='create-user-form__row'>
          <div className='create-user-form__form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='email@example.com'
            />
          </div>
          <div className='create-user-form__form-group'>
            <label htmlFor='cdi'>Documento</label>
            <input
              type='text'
              name='cdi'
              id='cdi'
              placeholder='Ingresa tu numero de documento'
            />
          </div>
        </div>
        <div className='create-user-form__row'>
          <div className='create-user-form__form-group'>
            <label htmlFor='mobile_phone'>Teléfono Movil</label>
            <input
              type='number'
              name='mobile_phone'
              id='mobile_phone'
              placeholder='Teléfono movil'
            />
          </div>
          <div className='create-user-form__form-group'>
            <label htmlFor='phone'>Teléfono Fijo</label>
            <input
              type='text'
              name='phone'
              id='phone'
              placeholder='Teléfono fijo'
            />
          </div>
        </div>
        <div className='create-user-form__row'>
          <div className='create-user-form__form-group'>
            <label htmlFor='role'>Rol de usuario</label>
            <select name='role' id='role'>
              <option value='patient'>Patient</option>
              <option value='doctor'>Doctor</option>
              <option value='bacteriologist'>Bacteriologist</option>
              <option value='administrator'>Administrator</option>
            </select>
          </div>
        </div>
        <button className='button' type='submit'>
          Guardar
        </button>
      </section>
    </>
  );
};

export default CreateUser;
