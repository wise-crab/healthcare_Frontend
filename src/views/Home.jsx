import React from 'react';
import HomeDoctor from '../components/HomeDoctor';
import HomePatient from '../components/HomePatient';
const Home = () => {
  const rol = 'patient';
  return (
    <section className='doctor card'>
      {rol == 'doctor' && <HomeDoctor />}
      {rol == 'patient' && <HomePatient />}
      {rol == 'doctor'}
      {rol == 'doctor'}
    </section>
  );
};
export default Home;
