import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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
  },
  media: {
    height: 140,
  },
  span: {
    fontWeight: 600,
    color: theme.palette.primary.contrastText,
  },
}));

function CountriesList() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [result, setResult] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.eu/rest/v2/all');
        setData(res.data);
        setFiltered(res.data);
      } catch (err) {
        throw Error(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getResult = async () => {
      const results = await filtered.filter((res) =>
        res.name.toLowerCase().includes(result.trim())
      );
      setData(results);
    };
    getResult();
  }, [result]);

  const onChange = (e) => {
    setResult(e.target.value);
  };
  console.log(data);

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
      <Grid container spacing={2}>
        {data.map((country, index) => (
          <Grid key={index} item xs={12} sm={4} md={3}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={country.flag}
                  title={country.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {country.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    <span className={classes.span}>Population: </span>
                    {country.population}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    <span className={classes.span}>Region: </span>
                    {country.region}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    <span className={classes.span}>Capital: </span>
                    {country.capital}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default CountriesList;
