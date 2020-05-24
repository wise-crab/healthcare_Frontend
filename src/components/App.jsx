import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout';
import Profile from '../views/Profile';
import CreateUser from '../views/CreateUser';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path='/' component={Login} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/create-user' component={CreateUser} />
    </Layout>
  </BrowserRouter>
);

export default App;
