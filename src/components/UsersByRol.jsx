import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../assets/styles/sass/views/_profile.scss';
import DynamicTable from './DynamicTable';
import { searchByrol } from '../actions/adminActions';

const UsersByrol = (props) => {
  const { users } = props;
  let dataUser = [];
  const [form, setValues] = useState({
    rol: '',
  });

  const updateInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
    dataUser = [];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.searchByrol(form);
  };
  users.users.forEach((item) => {
    const user = {
      id: item._id,
      documento: item.numberId,
      name: item.name,
      lastName: item.lastName,
      userName: item.userName,
      email: item.email,
      contactNumber: item.contactNumber,
      rol: item.rol,
    };
    dataUser.push(user);
  });

  return (
    <>
      <h3>Buscar usuarios por rol</h3>
      <section>
        <form className='search' id='search-component' onSubmit={handleSubmit}>
          <select className='search-rol' name='rol' onInput={updateInput}>
            <option value=''>Escoge un rol...</option>
            <option value='patient'>Patient</option>
            <option value='doctor'>Doctor</option>
            <option value='bacteriologist'>Bacteriologist</option>
            <option value='admin'>Administrator</option>
          </select>
          <button className='button--icon' type='submit'>
            <i className='fa fa-search' />
          </button>
        </form>
      </section>

      <section>
        {dataUser !== undefined && dataUser.length !== 0 ? (
          <DynamicTable data={dataUser} />
        ) : null}
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.adminReducer,
  };
};

const mapDispatchToProps = {
  searchByrol,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersByrol);
