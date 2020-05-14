import React from 'react';
import SearchCountry from './SearchCountry';
import Countries from './Countries';

const CountriesList = ({ data, result, onChange }) => {
  return (
    <>
      <SearchCountry onChange={onChange} />
      <Countries data={data} />
    </>
  );
};

export default CountriesList;
