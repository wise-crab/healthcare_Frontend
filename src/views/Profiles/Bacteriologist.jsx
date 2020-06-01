import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { searchPatient } from '../../actions/bateriologistActions';
import '../../assets/styles/sass/components/_search.scss';
import '../../assets/styles/sass/components/_table.scss';

const Bacteriologist = ({ children, history }) => {
  const [state, setState] = useState({
    search: '',
    searchResult: [],
  });

  const updateInput = (event) => {
    setState({
      ...state,
      search: event.target.value,
    });
  };

  const search = async () => {
    const patient = await searchPatient(state.search);
    // debugger
    patient !== null ?
      setState({ ...state, searchResult: [patient] }) :
      setState({ ...state, searchResult: [] });
  };

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

  return (
    <>
      <h1>Búsqueda de pacientes</h1>
      <form
        className='search card'
        id='search-component'
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          name='search'
          type='text'
          onChange={updateInput}
          className='input'
          placeholder='Búsqueda por numero de documento'
        />
        <button className='button--icon' type='submit' onClick={search}>
          <i className='fa fa-search' />
        </button>
      </form>

      <div className='bacteriologist-exams card' style={{ marginTop: 24 }}>
        <h4>Lista de pacientes</h4>
        <br />
        <div className='table-responsive'>
          {state.searchResult.length < 1 && 'No hay resultados'}
          {state.searchResult.length > 0 && renderResults()}
        </div>
      </div>
    </>
  );
};

export default withRouter(Bacteriologist);
