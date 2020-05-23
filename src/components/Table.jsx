import React, { Component } from 'react';
import '../assets/styles/sass/components/__table.scss';

const Table =({ data }) => {
  const titles = Object.keys(data[0]);
  
  return (
    <div className='table'>
      <div className='table__title'>
        {
          titles.map((title,idx) => {
            console.log(title);
            return(
              <div className='table__title def' key={idx}>
                <h5>{title}</h5>
              </div>
            )
          })
        }
      
      </div>
      <div className='table__content'>
        {data.map((item,idx) =>{
          const date = new Date(item.date *1000).toDateString();
          
          return (
              <div key={idx} className='table__content-item'>
                <div className='table__item def'>Select</div>
                <div className='table__item def'>{item.type}</div>
                <div className='table__item def'>{date}</div>
                <div className='table__item def'>{item.$oid}</div>
                <div className='table__item def'>{item.status}</div>
            </div>
          )}
        )}            
      </div>
    </div>
  )
}

export default Table