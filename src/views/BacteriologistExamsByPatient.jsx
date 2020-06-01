import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPendingExamsByPatientId } from '../actions/bateriologistActions';
import '../assets/styles/sass/components/_table.scss';

const BacteriologistExamsByPatient = (props) => {
  const [state, setState] = useState({
    currentPatient: {},
    exams: [],
  });

  useEffect(() => {
    getPendingExamsByPatientId(props.location.state.currentPatient._id).then(
      (response) => {
        setState({
          currentPatient: props.location.state.currentPatient,
          exams: response,
        });
      },
    );
  }, []);

  return (
    <>
      <h1>Lista de exámenes</h1>
      <div className='card'>
        <h4>
          {`${state.currentPatient.name} ${state.currentPatient.lastName}`}
        </h4>
        <p>
          Documento:
          {state.currentPatient.numberId}
        </p>
      </div>

      <div className='bacteriologist-exams card' style={{ marginTop: 24 }}>
        <h4>Lista de exámenes</h4>
        <br />
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Patología</th>
                <th>Fecha de orden</th>
                <th>Fecha de examen</th>
                <th>Número de orden</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {state.exams.map((exam) => {
                return (
                  <tr key={exam._id}>
                    <td>{exam.typeOfExam}</td>
                    <td>{exam.registrationDate}</td>
                    <td>{exam.registrationDate}</td>
                    <td>{exam._id}</td>
                    <td>
                      <Link
                        to={{
                          pathname: '/bacteriologist/assign-results',
                          state: state.currentPatient,
                        }}
                      >
                        Subir resultado
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BacteriologistExamsByPatient;
