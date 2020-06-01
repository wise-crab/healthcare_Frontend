import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/sass/components/_search.scss';
import '../assets/styles/sass/components/_table.scss';

const renderResults = () => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Documento</th>
          <th>Nombre</th>
          <th>Apellidos</th>
          <th>Teléfono</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{state.searchResult[0].numberId}</td>
          <td>{state.searchResult[0].name}</td>
          <td>{state.searchResult[0].lastName}</td>
          <td>{state.searchResult[0].contactNumber}</td>
          <td>
            <Link
              to={{
                pathname: '/bacteriologist/patient-exams',
                state: {
                  currentPatient: state.searchResult[0],
                },
              }}
            >
              Asignar resultados
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default renderResults;
