import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout'
import Header from '../components/Header'

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Route exact path='/' component={Layout} />
      <Route exact path='/login'component={Login} />
    </BrowserRouter>
  </>
)

export default App;