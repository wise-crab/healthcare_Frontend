/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/sass/views/_profile.scss';
import { updateUsers } from '../actions/adminActions';

const UpdateUser = (props) => {
  const { data } = props;
  const [form, setValues] = useState({
    id: '',
    numberId: '',
    name: '',
    lastName: '',
    email: '',
    contactNumber: '',
    rol: '',
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateUsers({ id: form.id }, form);
  };

  const response = data.data;

  return (
    <>
      <h1>Modificar usuario</h1>
      <section className='create-user-form card'>
        <h4 className='create-user-form__title'>
          Formulario de modificación de usuario
        </h4>
        <form action='' onSubmit={handleSubmit}>
          <div className='create-user-form__row'>
            <div className='create-user-form__form-group'>
              <label htmlFor='id'>Id</label>
              <input
                type='text'
                name='id'
                id='id'
                placeholder='Id'
                onChange={updateInput}
              />
            </div>
          </div>
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
              <label htmlFor='lastName'>Apellido</label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Apellido'
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
            <div className='create-user-form__form-group'>
              <label htmlFor='numberId'>Documento</label>
              <input
                type='text'
                name='numberId'
                id='numberId'
                placeholder='Ingresa tu numero de documento'
                onChange={updateInput}
              />
            </div>
          </div>
          <div className='create-user-form__row'>
            <div className='create-user-form__form-group'>
              <label htmlFor='contactNumber'>Teléfono Movil</label>
              <input
                type='number'
                name='contactNumber'
                id='contactNumber'
                placeholder='Teléfono movil'
                onChange={updateInput}
              />
            </div>
          </div>
          <div className='create-user-form__row'>
            <div className='create-user-form__form-group'>
              <label htmlFor='rol'>Rol de usuario</label>
              <select name='rol' id='rol' onChange={updateInput}>
                <option>...</option>
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
          {response !== undefined ? (
            <div className='create-user-form__form-group'>
              <h3>usuario modificado</h3>
            </div>
          ) : null}
        </form>
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.adminReducer,
  };
};

const mapDispatchToProps = {
  updateUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
