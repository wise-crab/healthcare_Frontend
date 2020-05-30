import React, { useEffect } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes/index';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  rest.user.role == null && rest.history.push('/');

  let currentRole = rest.user.role || 'patient';
  let currentRoutes = routes[currentRole];
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
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  } else {
    return (
      <Redirect
        to={{
          pathname: currentRoutes[0].path,
        }}
      />
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer,
  };
};

export default connect(mapStateToProps)(withRouter(ProtectedRoute));
