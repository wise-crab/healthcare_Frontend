import React from 'react';

const AssignExamResult = () => {
  return (
    <>
      <h1>Asignación de resultados</h1>
      <div className='card'>
        <h4>Nombre del paciente</h4>
        <p>Documento del paciente</p>
      </div>

      <div className='card' style={{ marginTop: 24 }}>
        <h4>Asignación de resultados </h4>
        <br />
        <p>datos del examen aquí</p>
        <form onSubmit={(event) => event.preventDefault()}>
          <div className='form-group'>
            <input type='file' name='' id='' />
          </div>
          <div className='form-group'>
            <input type='submit' className='button' value='Asignar examen' />
          </div>
        </form>
      </div>
    </>
  );
};

export default AssignExamResult;
