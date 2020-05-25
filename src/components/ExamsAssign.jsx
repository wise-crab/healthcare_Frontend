import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExamsAssing extends Component {
  constructor(){
    super();
    this.state = {
      exams : [
        {
          "$oid": "5ec86cfffc13ae120b0003f2",
          "type": "hematocrit",
          "date": "1578635216",
          "doctor": "Had Allone",
          "status": "avaliable"
        }, {
          "$oid": "5ec86cfffc13ae120b0003f3",
          "type": "Palpation",
          "date": "1576233631",
          "doctor": "Sianna Bellson",
          "status": "pending"
        }, {
          "$oid": "5ec86cfffc13ae120b0003f4",
          "type": "hematocrit",
          "date": "1571499406",
          "doctor": "Natalee Toomer",
          "status": "pending"
        }
      ]
    }
  }
  render(){
    console.log(this);
    
    return (
      <div className='Form'>
        <div className='Form__title'>Exams Assigment</div>
        <div className='Form__conatiner'>
  
          <h2>name last_name</h2>
          <h3>Id</h3>
  
  
          <div className='Form__container--field'>
            <select defaultValue={'DEFAULT'} >
                  <option value="hematocrit">Hematocrit</option>
                  <option value="white">white blood cells</option>
                  <option value="platelets">Platelets</option>
                  <option value="red">Red blood cells</option>
            </select>
            
            <button>+ Add the Exam</button>
        </div>

        <div className='Form__container'>
          {
              this.state.exams.map(assign => {
                return(
                  <div className='Form__container item'>
                    <i>icon</i>
                    <h6>{assign.type}</h6>
                  </div>
                )
              })
          }
        </div>  
  
        </div>
      </div>
  
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.patientsReducer;
};


export default connect(mapStateToProps)(ExamsAssing);

