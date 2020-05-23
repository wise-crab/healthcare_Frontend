import React, { Component } from 'react';
import '../assets/styles/sass/components/__table.scss';

const Table =({ data }) => {
  const titles = Object.keys(data[0]);
  
  return (
    <div className='table'>
      <div className='table__title'>
        <div className='table__title def'>Select</div>
        {
          titles.forEach(title => {
            console.log(title);
            return(
              <h1>404</h1>
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