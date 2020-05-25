import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../views/Login';
import Home from '../views/Home';
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

const App = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setExams(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route component component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
