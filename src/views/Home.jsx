import React from 'react';
import Doctor from '../components/Profiles/Doctor';
import Patient from '../components/Profiles/Patient';
import Admin from '../components/Profiles/Admin';

const Home = () => {
  const rol = 'patient';
  return (
    <section className='doctor card'>
      {rol == 'patient' && <Patient />}
      {rol == 'doctor' && <Doctor />}
      {rol == 'admin' && <Admin />}
      {rol == 'doctor'}
    </section>
  );
};
export default Home;
