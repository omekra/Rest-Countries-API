import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  borderCountries: {
    fontWeight: 600,
    maxWidth: 630,
    color: theme.palette.primary.contrastText,
  },
  borderSpan: {
    marginRight: 10,
  },
  borderButtons: {
    padding: '5px 30px',
    marginRight: 10,
    marginBottom: 10,
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
}));

const BorderCountries = ({ borders }) => {
  const { borderSpan, borderButtons, borderCountries } = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    for (var i = 0; i <= borders.length; i++) {
      const urls = borders.map(
        (border) => `https://restcountries.eu/rest/v2/alpha/${border}`
      );

      let array = [];

      urls.map(async (url) => {
        try {
          const res = await axios.get(url);
          array.push(res.data);
          if (array.length === borders.length) {
            setData(array);
          }
        } catch (err) {
          throw Error(err);
        }
      });
    }
  }, [borders]);

  let history = useHistory();
  const getBorderCountry = (name) => {
    localStorage.setItem('selectedCountry', name);
    history.push('/country-details', name);
  };

  const borderCountry = data.map((country, i) => {
    return (
      <Button
        className={borderButtons}
        key={i}
        onClick={() => getBorderCountry(country.name)}>
        {country.name}
      </Button>
    );
  });

  return (
    <>
      <Typography
        variant="body2"
        color="textSecondary"
        component="div"
        className={borderCountries}>
        <span className={borderSpan}>
          ({borders.length}) Border Countries:{' '}
        </span>
        {borderCountry}
      </Typography>
    </>
  );
};

export default BorderCountries;
