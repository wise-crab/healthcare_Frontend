import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../views/Login';
import Layout from '../views/Layout';
import NotFound from '../views/NotFound.jsx';

const API = 'http://localhost:3000/users';

const App = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((data) => setExams(data))
      .catch((err)=> console.error(err))
  },[]);
  console.log(exams);
  
  return(
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route component component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
  );
}
export default App;