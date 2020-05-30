/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes/index';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  rest.user.role == null && rest.history.push('/');

  const currentRole = rest.user.role || 'patient';
  const currentRoutes = routes[currentRole];

  let hasAccess = false;
  const allowAccess = () => {
    currentRoutes.forEach((element) => {
      if (rest.path === element.path) {
        hasAccess = true;
      }
    });
  };

  allowAccess();

  if (hasAccess) {
    return (
      <Route
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  }
  return (
    <Redirect
      to={{
        pathname: currentRoutes[0].path,
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer,
  };
};

export default connect(mapStateToProps)(withRouter(ProtectedRoute));
