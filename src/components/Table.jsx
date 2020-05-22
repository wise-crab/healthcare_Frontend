import React, { Component } from 'react';
import '../../assets/styles/sass/components/__table.scss'

const createItem = (id, date, type, status) => {
  return [id, date, type, status];
}

class Table extends Component {
  constructor(props) {
    super(props);
    this.id;
    this.date;
    this.type;
    this.status;
  }

  render() {
    return (
      <div className='table'>
        <div className='table__title'>
          <div className='table__title def'>Select</div>
          <div className='table__title def'>Type Of Exam</div>
          <div className='table__title def'>Order Date</div>
          <div className='table__title def'>Order ID</div>
          <div className='table__title def'>Status</div>
        </div>
        <div className='table__content'>
          <div className='table__content-item'>
            <div className='table__item def'>Select</div>
            <div className='table__item def'>Type Of Exam</div>
            <div className='table__item def'>Order Date</div>
            <div className='table__item def'>Order ID</div>
            <div className='table__item def'>Status</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Table