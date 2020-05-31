/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import csv from 'csv';
import { uploadUsers } from '../actions/adminActions';
import DynamicTable from '../components/DynamicTable';

function BulkData(props) {
  const [dataUpload, setDataUpload] = useState(0);

  const uploadUsersData = (files) => {
    const reader = new FileReader();
    reader.onload = () => {
      csv.parse(reader.result, { columns: true }, (err, data) => {
        if (err) return err;
        setDataUpload(data);
        return null;
      });
    };
    reader.readAsBinaryString(files[0]);
  };

  const uploadDataServer = () => {
    console.log(dataUpload);
    const data = {
      users: dataUpload,
    };
    props.uploadUsers(data, props.history);
  };

  return (
    <section className='container'>
      <Dropzone onDrop={uploadUsersData}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            Click me to upload a file!
          </div>
        )}
      </Dropzone>

      <aside>
        {dataUpload.length > 0 && (
          <>
            <DynamicTable data={dataUpload} />
            <button onClick={uploadDataServer} type='button'>
              Cargar Archivo
            </button>
          </>
        )}
      </aside>
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    exams: state.uploadReducer,
  };
};

const mapDispatchToProps = {
  uploadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(BulkData);
