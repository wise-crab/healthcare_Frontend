import React, { Component } from 'react';
import { connect } from 'react-redux';
import Doctor from '../components/Profiles/Doctor';
import Patient from '../components/Profiles/Patient';
import Admin from '../components/Profiles/Admin';
import Bacteriologist from '../components/Profiles/Bacteriologist';
import * as usersActions from '../actions/usersActions';

class Home extends Component {
  render() {
    const role = this.props.users[0].role;

    return (
      <>
        {role == 'patient' && <Patient />}
        {role == 'doctor' && <Doctor />}
        {role == 'admin' && <Admin />}
        {role == 'bacteriologist' && <Bacteriologist />}
      </>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Home);
