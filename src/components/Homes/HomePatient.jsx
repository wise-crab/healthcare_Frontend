import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export class HomePatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: 'Select', field: 'checkbox', checkboxSelection: true},
        { headerName: 'Type Of Exam', field: 'type' },
        { headerName: 'Order Date', field: 'date' },
        { headerName: 'Order ID', field: 'id' },
        { headerName: 'Status', field: 'action' }
      ],
      rowData: [
        { type: 'Celica', date: 35000, id: 'any', action: 'avaliable' },
        { type: 'Mondeo', date: 32000, id: 'any', action: 'avaliable' },
        { type: 'Boxter', date: 72000, id: 'any', action: 'avaliable' }]
    }
  }

  render() {
    return (
      <div className='ag-theme-alpine' style={ {height: '200px', width: '1fr'} }>
      <button className='button' onClick={this.onButtonClick}>Get selected rows</button>
      <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection='multiple'
          >
      </AgGridReact>
    </div>
    )
  }
}

export default HomePatient

