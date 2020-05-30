/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import csv from 'csv';
import DynamicTable from '../components/DynamicTable';

class BulkData extends Component {
  constructor() {
    super();
    this.proviewData = [];
    this.state = {
      files: [],
      proviewData: [],
    };
    this.onDrop = (files) => {
      const reader = new FileReader();
      reader.onload = () => {
        csv.parse(reader.result, { columns: true }, (err, data) => {
          if (err) return err;
          this.data = data;
          this.proviewData = data.slice(0, 20);
          this.setState({ proviewData: data.slice(0, 20) });
        });
      };

      reader.readAsBinaryString(files[0]);
      this.setState({ files });
    };
  }

  render() {
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {file.name}
        {' '}
        -
        {file.size}
        {' '}
        bytes
      </li>
    ));

    return (
      <div align='center' onContextMenu='return false'>
        <Dropzone accept='.csv' onDropAccepted={this.onDrop.bind(this)}>
          {({ getRootProps, getInputProps }) => (
            <section className='container'>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>
                  Arrastre y suelte el archivo CSV aquí, o haga clic aqui para
                  seleccionar archivos
                </p>
              </div>
              <aside>
                <h4>Archivos seleccionados</h4>
                <ul>{files}</ul>

                {this.state.proviewData.length > 0 && (
                  <>
                    <DynamicTable data={this.state.proviewData} />
                    <button type='button'>Importar Datos</button>
                  </>
                )}
              </aside>
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default BulkData;
