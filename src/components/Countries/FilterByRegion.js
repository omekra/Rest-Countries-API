import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  select: {
    padding: 10,
    borderRadius: 4,
    boxShadow:
      '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid red',
  },
  media: {
    height: 140,
  },
}));

const SearchCountry = ({ fetchedRegion }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {fetchedRegion.map((country, index) => (
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
};

export default SearchCountry;
