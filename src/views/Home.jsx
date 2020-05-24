import React, { Component } from 'react';
import Doctor from '../components/Profiles/Doctor';
import Patient from '../components/Profiles/Patient';
import Admin from '../components/Profiles/Admin';
import Bacteriologist from '../components/Profiles/Bacteriologist';
import { getUserByID } from '../APIS/apis'
                              
class Home extends Component {
  constructor(){
    super();
    this.state = {
      "users" : [
        {
        "$oid": "5ec6c34efc13ae0f3a000028",
        "cdi": "1994843918",
        "name": "Sascha",
        "last_name": "Pettifer",
        "email": "spettifer0@tuttocitta.it",
        "phone": "551-312-2514",
        "role": "doctor"
        },
        {
        "$oid": "5ec6c34efc13ae0f3a000029",
        "cdi": "6576698690",
        "name": "Lettie",
        "last_name": "Rosekilly",
        "email": "lrosekilly1@jigsy.com",
        "phone": "564-700-1097",
        "role": "patient"
        },
        {
        "$oid": "5ec6c34efc13ae0f3a00002a",
        "cdi": "5025601703",
        "name": "Clemence",
        "last_name": "Streeting",
        "email": "cstreeting2@friendfeed.com",
        "phone": "484-441-1672",
        "role": "bacteriologist"
        },
        {
          "$oid": "5ec6c34efc13ae0f3a00002c",
          "cdi": "0129194190",
          "name": "Petrina",
          "last_name": "Causbey",
          "email": "pcausbey4@tinyurl.com",
          "phone": "142-427-3406",
          "role": "admin"
        }
      ]
    }
  }
  
  
  render(){
    
    const role = this.state.users[0].role;

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