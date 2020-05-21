import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout';
import NotFound from '../views/NotFound.jsx';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route component component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;