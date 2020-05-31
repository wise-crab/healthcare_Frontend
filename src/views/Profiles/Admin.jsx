import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/styles/sass/components/_main.scss';
import Sidebar from '../../components/Sidebar'
import Form from '../../components/Form'
import CreateUser from '../CreateUser'

const Admin = () => {
  return <CreateUser />;
};
export default withRouter(Admin);
