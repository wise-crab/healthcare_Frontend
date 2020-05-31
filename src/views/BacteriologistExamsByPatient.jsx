import React from 'react';
import '../assets/styles/sass/components/_table.scss';

const BacteriologistExamsByPatient = () => {
  return (
    <>
      <h1>Lista de exámenes</h1>
      <div className='card'>
        <h4>Nombre del paciente</h4>
        <p>Documento del paciente</p>
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
              <tr>
                <td>Tipo de examen</td>
                <td>Fecha de orden</td>
                <td>Fecha de examen</td>
                <td>Número de orden</td>
                <td>Subir Resultado</td>
              </tr>
              <tr>
                <td>Tipo de examen</td>
                <td>Fecha de orden</td>
                <td>Fecha de examen</td>
                <td>Número de orden</td>
                <td>Subir Resultado</td>
              </tr>
              <tr>
                <td>Tipo de examen</td>
                <td>Fecha de orden</td>
                <td>Fecha de examen</td>
                <td>Número de orden</td>
                <td>Subir Resultado</td>
              </tr>
              <tr>
                <td>Tipo de examen</td>
                <td>Fecha de orden</td>
                <td>Fecha de examen</td>
                <td>Número de orden</td>
                <td>Subir Resultado</td>
              </tr>
              <tr>
                <td>Tipo de examen</td>
                <td>Fecha de orden</td>
                <td>Fecha de examen</td>
                <td>Número de orden</td>
                <td>Subir Resultado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BacteriologistExamsByPatient;
