import React from 'react';
import HomeDoctor from '../components/Homes/HomeDoctor';
import HomePatient from '../components/Homes/HomePatient';
import Admin from '../components/Homes/Admin';

const Home = () => {
  const rol = 'admin';
  return (
    <section className='doctor card'>
      {rol == 'patient' && <HomePatient />}
      {rol == 'doctor' && <HomeDoctor />}
      {rol == 'admin' && <Admin />}
      {rol == 'doctor'}
    </section>
  );
};
export default Home;
