import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../views/Login";
import Admin from '../views/Profiles/Admin'
import Doctor from '../views/Profiles/Doctor'
import Patient from '../views/Profiles/Patient'
import Bacteriologist from '../views/Profiles/Admin'
import Layout from "../views/Layout";
import Profile from "../views/Profile";
import BulkData from "../views/BulkData";
import NotFound from "../views/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/medic" component={Doctor} />
          <Route exact path="/patient" component={Patient} />
          <Route exact path="/bacteriologist" component={Bacteriologist} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/bulk-data" component={BulkData} />
          <Route component component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
