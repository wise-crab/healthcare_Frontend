import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/styles/sass/components/_main.scss';
import Sidebar from '../../components/Sidebar'
import Form from '../../components/Form'

const Admin = ({ children, history }) => {
  let styles = {};
  if (history.location.pathname === '/') {
    styles = { marginLeft: '0' };
  }
  return(
    <section className='' style={styles}>
      <Form className='main-content'/>
    </section>
  );
};
export default withRouter(Admin);
