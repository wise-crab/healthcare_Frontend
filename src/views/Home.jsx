import React from 'react';
import HomeDoctor from '../components/HomeDoctor';
import HomePatient from '../components/HomePatient';
const Home = () => {
  const rol = 'doctor';
  return (
    <section className='doctor card'>
      {rol == 'patient' && <HomePatient />}
      {rol == 'doctor' && <HomeDoctor />}
      {rol == 'doctor'}
      {rol == 'doctor'}
    </section>
  );
};
export default Home;
