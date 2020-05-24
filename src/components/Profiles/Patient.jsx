import React, { useState, useEffect } from 'react';
import '../../assets/styles/sass/components/__table.scss';
import Table from '../Table';

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
    return 'cargando';
  }
  return <Table data={state.data} />;
};
export default Patient;
