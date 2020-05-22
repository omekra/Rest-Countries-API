import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
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

const SearchCountry = ({ result, onChange, isRegion }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={4} className={classes.inputContainer}>
      <SearchIcon />
      <input
        type="text"
        placeholder={isRegion ? 'Disabled' : 'Search for a country...'}
        value={result}
        onChange={onChange}
        className={classes.input}
        disabled={isRegion ? true : false}
      />
    </Grid>
  );
};

export default SearchCountry;
