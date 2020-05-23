import React, { Component } from 'react';
import '../../assets/styles/sass/components/__table.scss';
import table from '../Table'
import Table from '../Table';

import getData from '../../functions/getData'

const API = 'http://0.0.0.0:3000/exams'

const HomePatient =() => {
  const data = getData();
  return (
    <Table data={data}/>
  )
}

export default HomePatient;