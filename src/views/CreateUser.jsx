/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/sass/views/_createUser.scss';

import addUser from '../actions/adminActions';

const CreateUser = (props) => {
  const [form, setValues] = useState({
    name: '',
    last_name: '',
    email: '',
    cdi: '',
    phone: '',
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
    props.addUser(form);
  };

  return (
    <>
      <h1>Creación de usuarios</h1>
      <form className='create-user-form card' onSubmit={handleSubmit}>
        <h4 className='create-user-form__title'>
          Formulario de creación de roles
        </h4>
        <div className='create-user-form__row'>
          <div className='create-user-form__form-group'>
            <label htmlFor='name'>Nombre</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Nombre'
              onChange={updateInput}
            />
          </div>
          <div className='create-user-form__form-group'>
            <label htmlFor='last_name'>Apellidos</label>
            <input
              type='text'
              name='last_name'
              id='last_name'
              placeholder='Apellidos'
              onChange={updateInput}
            />
          </div>
        </div>
        <div className='create-user-form__row'>
          <div className='create-user-form__form-group'>
            <label htmlFor='cdi'>Documento</label>
            <input
              type='text'
              name='cdi'
              id='cdi'
              placeholder='Ingresa tu numero de documento'
              onChange={updateInput}
            />
          </div>
          <div className='create-user-form__form-group'>
            <label htmlFor='phone'>Teléfono Movil</label>
            <input
              type='number'
              name='phone'
              id='phone'
              placeholder='Teléfono movil'
              onChange={updateInput}
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
              onChange={updateInput}
            />
          </div>

          <div className='create-user-form__row'>
            <div className='create-user-form__form-group'>
              <label htmlFor='role'>Rol de usuario</label>
              <select name='role' id='role' onChange={updateInput}>
                <option value='patient'>Patient</option>
                <option value='doctor'>Doctor</option>
                <option value='bacteriologist'>Bacteriologist</option>
                <option value='administrator'>Administrator</option>
              </select>
            </div>
          </div>
        </div>
        <button className='button'>Guardar</button>
      </form>
    </>
  );
};

const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(CreateUser);
