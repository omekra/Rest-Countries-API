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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        console.log(res);
        setCountries(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Grid container spacing={2}>
      {countries.map((country, index) => (
        <Grid key={index} item xs={12} sm={4} md={3}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={country.flag}
                title={`${country.name} flag`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {country.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span className={classes.span}>Population: </span>
                  {country.population}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span className={classes.span}>Region: </span>
                  {country.region}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span className={classes.span}>Capital: </span>
                  {country.capital}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CountriesList;
