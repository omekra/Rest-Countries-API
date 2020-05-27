import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import CountryDetailsInfo from './CountryDetailsInfo';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  backButton: {
    padding: '5px 30px',
    marginBottom: 50,
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
}));

const CountryDetails = (props) => {
  const { backButton } = useStyles();

  let country = props.history.location.state;
  const url = `https://restcountries.eu/rest/v2/name/${country}`;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        throw Error(err);
      }
    };
    fetchData();
  }, [url]);

  const countryDetails = data.map(
    ({
      name,
      cioc,
      flag,
      population,
      nativeName,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    }) => (
      <CountryDetailsInfo
        key={cioc}
        name={name}
        nativeName={nativeName}
        flag={flag}
        population={population}
        region={region}
        subregion={subregion}
        capital={capital}
        topLevelDomain={topLevelDomain}
        currencies={currencies}
        languages={languages}
        borders={borders}
      />
    )
  );

  return (
    <>
      <Button
        href="/"
        startIcon={<KeyboardBackspaceIcon />}
        className={backButton}>
        Back
      </Button>

      {countryDetails}
    </>
  );
};

export default CountryDetails;
