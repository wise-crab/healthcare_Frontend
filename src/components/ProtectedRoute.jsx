import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes/index';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  let currentRole = rest.user.role;
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

export default connect(mapStateToProps)(ProtectedRoute);
