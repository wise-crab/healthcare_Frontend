import React from 'react';
import '../assets/styles/sass/components/_search.scss';

const Search = () => {
  const placeholder = `enter the patient ID or name`;
  return (
    <section className='search' id='search-component'>
      <input type='text' className='' placeholder={placeholder} />
      <button className='button--icon'>
        <i className='fa fa-search'></i>
      </button>
    </section>
  );
};
export default Search;
