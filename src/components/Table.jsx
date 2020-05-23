import React, { Component } from 'react';
import '../../assets/styles/sass/components/__table.scss';
import item from '../../classes/item'

const Table =() => {
  const item1 = new item('666','blood', new Date(), '1');
  
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

export default Table