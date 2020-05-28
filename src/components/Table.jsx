import React from 'react';
import '../assets/styles/sass/components/_table.scss';
import Checkbox from './Checkbox';

const Table = ({ data }) => {
  const titles = Object.keys(data[0]);

  return (
    <div className='table-responsive'>
      <table className='table table-striped'>
        <thead>
          <tr>
            {titles.map((title, idx) => {
              return <th key={idx}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            const date = new Date(item.date * 1000).toDateString();

            return (
              <tr key={idx}>
                <td>
                  <Checkbox text=' ' value={item.$oid} />
                </td>
                <td>{item.type}</td>
                <td>{date}</td>
                <td>{item.$oid}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
