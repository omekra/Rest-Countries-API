import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, FormControl, NativeSelect } from '@material-ui/core';
import SearchCountry from './SearchCountry';
import FilterByRegion from './FilterByRegion';
import Countries from './Countries';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  searchNav: {
    justifyContent: 'space-between',
  },
  formControl: {
    flexDirection: 'inherit',
    padding: 10,
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    borderRadius: 4,
    '& .MuiInput-underline:before': {
      borderBottom: 'none',
    },
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
    '& .MuiNativeSelect-select': {
      backgroundColor: 'transparent',
    },
  },
  filterByRegion: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 40,

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'left',
    },
  },
}));

const CountriesList = ({ data, result, onChange, url }) => {
  const classes = useStyles();

  const [fetchedRegion, setFetchedRegion] = useState([]);
  const [isRegion, setIsRegion] = useState(false);

  const fetchRegion = async (fetchedRegion) => {
    let changeableUrl = url;

    if (fetchedRegion) {
      changeableUrl = `${url}/region/${fetchedRegion}`;
    }

    try {
      const { data } = await axios.get(changeableUrl);
      const region = data.map((res) => res);

      return region;
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedRegion(await fetchRegion());
    };

    fetchAPI();
  }, []);

  const handleRegionChange = async (region) => {
    const fetchedData = await fetchRegion(region);
    setFetchedRegion(fetchedData);
    setIsRegion(true);
    region === '' && setIsRegion(false);
  };

  return (
    <>
      <Grid container className={classes.searchNav}>
        {isRegion ? (
          <SearchCountry
            onChange={onChange}
            result={result}
            isRegion={isRegion}
          />
        ) : (
          <SearchCountry onChange={onChange} result={result} />
        )}

        <Grid item xs={12} md={4} className={classes.filterByRegion}>
          <FormControl className={classes.formControl}>
            <NativeSelect
              className={classes.select}
              defaultValue=""
              onChange={(e) => handleRegionChange(e.target.value)}>
              <option value="">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
      {isRegion ? (
        <FilterByRegion fetchedRegion={fetchedRegion} />
      ) : (
        <Countries data={data} />
      )}
    </>
  );
};

export default CountriesList;
