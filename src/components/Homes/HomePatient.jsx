import React, { Component } from 'react';
import '../../assets/styles/sass/components/__table.scss';
import item from '../../classes/item'

const data = [
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
}, {
  "$oid": "5ec86cfffc13ae120b0003f5",
  "type": "Palpation",
  "date": "1582002612",
  "doctor": "Walsh Pimer",
  "status": "avaliable"
}, {
  "$oid": "5ec86cfffc13ae120b0003f6",
  "type": "Inspection",
  "date": "1581855846",
  "doctor": "Angie Metherell",
  "status": "pending"
}, {
  "$oid": "5ec86cfffc13ae120b0003f7",
  "type": "white blood cells",
  "date": "1575957579",
  "doctor": "Lawry Whitmarsh",
  "status": "avaliable"
}, {
  "$oid": "5ec86cfffc13ae120b0003f8",
  "type": "platelets",
  "date": "1570141252",
  "doctor": "Belita Evenden",
  "status": "pending"
}, {
  "$oid": "5ec86cfffc13ae120b0003f9",
  "type": "Palpation",
  "date": "1584061664",
  "doctor": "Tara Scrivner",
  "status": "pending"
}, {
  "$oid": "5ec86cfffc13ae120b0003fa",
  "type": "hemoglobin",
  "date": "1574797863",
  "doctor": "Clareta Keoghane",
  "status": "pending"
}, {
  "$oid": "5ec86cfffc13ae120b0003fb",
  "type": "red blood cells",
  "date": "1576523482",
  "doctor": "Nixie Varrow",
  "status": "pending"
}
];

const Table =() => {

   
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