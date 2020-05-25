import React from 'react';
import '../assets/styles/sass/components/_search.scss';

const Search = () => {
  const placeholder=`enter the patient ID or name`
  return (
    <section className='main'>
      <div className='card'>
        <input type='text' className='' placeholder={placeholder} />
        <img src="" alt=""/>
      </div>
    </section>
  );
};
export default Search;