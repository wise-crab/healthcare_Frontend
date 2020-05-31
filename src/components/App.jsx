import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from '../views/Login';
import Admin from '../views/Profiles/Admin';
import Doctor from '../views/Profiles/Doctor';
import Patient from '../views/Profiles/Patient';
import Bacteriologist from '../views/Profiles/Bacteriologist';
import Layout from '../views/Layout';
import Profile from '../views/Profile';
import CreateUser from '../views/CreateUser';
import BulkData from '../views/BulkData';
import NotFound from '../views/NotFound';
import UpdateUser from './UpdateUser';
import Search from './Search';
import UsersByRol from './UsersByRol';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Login} />
          <ProtectedRoute exact path='/admin' component={Admin} />
          <ProtectedRoute exact path='/medic' component={Doctor} />
          <ProtectedRoute exact path='/patient' component={Patient} />
          <ProtectedRoute
            exact
            path='/bacteriologist'
            component={Bacteriologist}
          />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <ProtectedRoute exact path='/create-user' component={CreateUser} />
          <ProtectedRoute exact path='/bulk-data' component={BulkData} />
          <ProtectedRoute exact path='/update-user' component={UpdateUser} />
          <ProtectedRoute exact path='/search' component={Search} />
          <ProtectedRoute exact path='/users-rol' component={UsersByRol} />

          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
