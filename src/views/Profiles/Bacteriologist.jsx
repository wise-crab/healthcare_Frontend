import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/styles/sass/components/_search.scss';
import '../../assets/styles/sass/components/_table.scss';

const Bacteriologist = ({ children, history }) => {
  const [form, setForm] = useState({
    search: '',
  });

  const updateInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1>Búsqueda de pacientes</h1>
      <form className='search card' id='search-component'>
        <input
          name='search'
          type='text'
          onChange={updateInput}
          className='input'
        />
        <button className='button--icon' type='submit'>
          <i className='fa fa-search' />
        </button>
      </form>

      <div className='bacteriologist-exams card' style={{ marginTop: 24 }}>
        <h4>Lista de pacientes</h4>
        <br />
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Tipo de examen</th>
                <th>Fecha de orden</th>
                <th>Fecha de examen</th>
                <th>Número de orden</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tipo de examen</td>
                <td>Fecha de orden</td>
                <td>Fecha de examen</td>
                <td>Número de orden</td>
                <td>Acción</td>
              </tr>
              <tr>
                <td>Tipo de examen</td>
                <td>Fecha de orden</td>
                <td>Fecha de examen</td>
                <td>Número de orden</td>
                <td>Acción</td>
              </tr>
              <tr>
                <td>Tipo de examen</td>
                <td>Fecha de orden</td>
                <td>Fecha de examen</td>
                <td>Número de orden</td>
                <td>Acción</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default withRouter(Bacteriologist);
