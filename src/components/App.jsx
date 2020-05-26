import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../views/Login';
import Home from '../views/Home';
import Layout from '../views/Layout';
import Profile from '../views/Profile';
import CreateUser from '../views/CreateUser';
import NotFound from '../views/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/create-user' component={CreateUser} />
          <Route component component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
