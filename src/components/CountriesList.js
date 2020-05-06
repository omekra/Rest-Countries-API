import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Countries from './Countries';

const useStyles = makeStyles((theme) => ({
  root: {},
  inputContainer: {
    display: 'flex',
    marginBottom: 40,
    padding: 10,
    borderRadius: 4,
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  input: {
    border: 'none',
    width: '100%',

    '&:focus': {
      outline: 'none',
    },
  },
}));

function CountriesList({ data, filtered, result, onChange }) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} md={4} className={classes.inputContainer}>
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for a country..."
          value={result}
          onChange={onChange}
          className={classes.input}
        />
      </Grid>
      <Countries data={data} />
    </>
  );
}

export default CountriesList;
