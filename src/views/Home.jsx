import React, { Component } from 'react';
import { connect } from 'react-redux'
import Doctor from './Profiles/Doctor';
import Patient from './Profiles/Patient';
import Admin from './Profiles/Admin';
import Bacteriologist from './Profiles/Bacteriologist';
import * as loginUser from '../actions/loginActions';

class Home extends Component {
  componentDidMount(){
    this.props
  }
  render(){
    
    console.log(this);
    
    
    // const role = this.props.patient[0].role;
    
    return (
      <section className='doctor card'>
        {/* {role == 'patient' && <Patient />}
        {role == 'doctor' && <Doctor />}
        {role == 'admin' && <Admin />}
        {role == 'bacteriologist' && <Bacteriologist />} */}
      </section>
    );
  }
}

// const mapStateToProps = (reducers) => {
//   return  reducers.loginReducer;
// }

const mapDispatchToProps = {
  loginUser,
}

export default connect (null,mapDispatchToProps) (Home);
