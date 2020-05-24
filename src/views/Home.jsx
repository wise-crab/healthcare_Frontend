import React, { Component } from 'react';
import Doctor from '../components/Profiles/Doctor';
import Patient from '../components/Profiles/Patient';
import Admin from '../components/Profiles/Admin';
import Bacteriologist from '../components/Profiles/Bacteriologist';
import { getUserByID } from '../APIS/apis'

const api = getUserByID;
                              
class Home extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount(){
    this.fetchData();
  }

  fetchData = async ()=>{
    this.setState({ loading: true, error: null })
    try {
      const role = await api
      this.setState({ loading: false, data: data });
    } catch (err) {
      this.setState({ loading: false, error: error })
    }
  }

  render(){


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
export default Home;