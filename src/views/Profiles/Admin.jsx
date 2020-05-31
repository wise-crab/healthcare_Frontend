import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../assets/styles/sass/components/_main.scss';
import CreateUser from '../CreateUser';

const Admin = () => {
  return <CreateUser />;
};
export default withRouter(Admin);
