import React, { Component } from 'react';
import '../../assets/styles/sass/components/__table.scss'

class HomePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='table'>
        <div className='table__title'>
          <div className="table__title-def">Select</div>
          <div className="table__title-def">Type Of Exam</div>
          <div className="table__title-def">Order Date</div>
          <div className="table__title-def">Order ID</div>
          <div className="table__title-def">Status</div>
        </div>
      </div>
    )
  }
}

export default HomePatient