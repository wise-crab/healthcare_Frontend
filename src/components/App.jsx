import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../views/Login';
import '../assets/styles/sass/styles.scss';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={Login} />
  </BrowserRouter>
);

export default App;
