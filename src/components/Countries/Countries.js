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
  root: {},
  media: {
    height: 140,
  },
  span: {
    fontWeight: 600,
    color: theme.palette.primary.contrastText,
  },
}));

const Countries = ({ data }) => {
  const classes = useStyles();

  return (
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

export default Countries;
