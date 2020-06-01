/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import getExamsByPatient from '../../fetchs/patienstFetch';
import Table from '../../components/Table';

class Patient extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    this.props.getExamsByPatient(id);
  }

  render() {
    const { error, pending, exams } = this.props;
    console.log({ error, pending, exams });
    if (error) {
      return (
        <div>
          Error!
          {error.message}
        </div>
      );
    }

    if (pending) {
      return <h1>Cargando datos...</h1>;
    }

    if (exams.length > 0) {
      return (
        <>
          <h1>Examenes del usuario</h1>
          <section className='card'>
            <Table data={exams} />
          </section>
        </>
      );
    }
    return (
      <>
        <h1>Sin examenes cargados</h1>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    exams: state.patientReducer.exams,
    pending: state.patientReducer.pending,
    error: state.patientReducer.error,
    id: state.authReducer.id,
  };
};

const mapDispatchToProps = {
  getExamsByPatient,
};

export default connect(mapStateToProps, mapDispatchToProps)(Patient);
