import React from 'react';
import HomeDoctor from '../components/Homes/HomeDoctor';
import HomePatient from '../components/Homes/HomePatient';
const Home = () => {
  const rol = 'patient';
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
