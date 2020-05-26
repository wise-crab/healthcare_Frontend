import React from 'react';
import { withRouter } from 'react-router-dom';
import Search from '../Search';
const Bacteriologist = () => {
  return (
    <section className='' style={styles}>
      <Search />
    </section>
  );
};
export default withRouter(Bacteriologist);
