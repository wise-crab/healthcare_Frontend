import React, { Component } from 'react';
import { connect } from 'react-redux'
import Doctor from '../components/Profiles/Doctor';
import Patient from '../components/Profiles/Patient';
import Admin from '../components/Profiles/Admin';
import Bacteriologist from '../components/Profiles/Bacteriologist';
import { getUserByID } from '../APIS/apis'
import axios from 'axios';
                              
class Home extends Component {
  constructor(){
    super();
    this.state = {
      users : []
    }
  }

  async componentDidMount() {
		const res = await axios.get(getUserByID);
		this.setState({
			users: res.data
		});
	}
    
  render(){
    
    const role = this.state.users[0];
    console.log(role);
    
    return (
      <section className='doctor card'>
        {role == 'patient' && <Patient />}
        {role == 'doctor' && <Doctor />}
        {role == 'admin' && <Admin />}
        {role == 'bacteriologist' && <Bacteriologist />}
      </section>
    );

  }
};


export default connect (null, null) (Home);