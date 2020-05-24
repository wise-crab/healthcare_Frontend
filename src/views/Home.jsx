import React from 'react';
import Doctor from '../components/Profiles/Doctor';
import Patient from '../components/Profiles/Patient';
import Admin from '../components/Profiles/Admin';
import Bacteriologist from '../components/Profiles/Bacteriologist';
                              
const Home = () => {
  const role = 'bacteriologist';
  return (
    <section className='doctor card'>
      {role == 'patient' && <Patient />}
      {role == 'doctor' && <Doctor />}
      {role == 'admin' && <Admin />}
      {role == 'bacteriologist' && <Bacteriologist />}
    </section>
  );
};
export default Home;