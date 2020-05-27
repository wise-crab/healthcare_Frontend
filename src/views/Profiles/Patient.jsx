import React, { useState, useEffect } from 'react';
import Table from '../../components/Table';
const Patient = () => {
  const [state, setState] = useState({ isReady: false, data: [] });
  useEffect(() => {
    fetch('https://data-mock-278118.wl.r.appspot.com/api/exams')
      .then((response) => response.json())
      .then((data) => {
        setState({ isReady: true, data: data.data });
      })
      .catch((error) => console.error(error));
  }, []);

  if (!state.isReady) {
    return 'Loading';
  }
  return (
    <>
      <h1>Title</h1>
      <section className='card'>
        <Table data={state.data} />
      </section>
    </>
  );
};
export default Patient;
