import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path='/' component={Login} />
    </Layout>
  </BrowserRouter>
);

export default App;
