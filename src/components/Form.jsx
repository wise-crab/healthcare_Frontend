import React from 'react';

const Form =() => {
  
  return (
    <div className='Form'>
      <div className='Form__title'>Creación de usuarios</div>
      <div className='Form__conatiner'>

        <div className='Form__container--field'>
          <h3 className='Form__field-def'>Name</h3>
          <input type="text" placeholder='Enter your name'/>
        </div>
        <div className='Form__container--field'>
          <h3 className='Form__field-def'>Last Name</h3>
          <input type="text" placeholder='Enter your last Name'/>
        </div>
        <div className='Form__container--field'>
            <h3 className='Form__field-def'>email</h3>
            <input type="text" placeholder='Enter your email'/>
        </div>
        <div className='Form__container--field'>
            <h3 className='Form__field-def'>ID</h3>
            <input type="text" placeholder='Enter your ID number'/>
        </div>
        <div className='Form__container--field'>
            <h3 className='Form__field-def'>Phone</h3>
            <input type="text" placeholder='Enter your Phone number'/>
        </div>

        <div className='Form__container--field'>
            <h3 className='Form__field-def'>Role</h3>

            <select defaultValue={'DEFAULT'} >
              <option value="admin">Admin</option>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="bacteriologist">Bacteriologist</option>
            </select>

        </div>
      </div>

        <button>+ Create</button>

      </div>

  )
}

export default Form;

// <select value='' />
