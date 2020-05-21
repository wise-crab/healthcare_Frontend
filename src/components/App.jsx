import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout';
import NotFound from '../views/NotFound.jsx';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path='/login' component={Login} />

      <Route component component={NotFound} />
    </Layout>
  </BrowserRouter>
);

export default App;