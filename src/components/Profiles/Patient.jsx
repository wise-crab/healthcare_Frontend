import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Table from '../Table';
import Sidebar from '../Sidebar'

const Patient = ({ children, history }) => {
  let styles = {};
  if (history.location.pathname === '/') {
    styles = { marginLeft: '0' };
  }
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
    <section className='' style={styles}>
      <Table data={state.data} />
    </section>
  );
};
export default withRouter(Patient);
