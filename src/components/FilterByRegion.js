import React from 'react';
import { useHistory } from 'react-router';
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
  span: {
    fontWeight: 600,
    color: theme.palette.primary.contrastText,
  },
}));

const SearchCountry = ({ fetchedRegion }) => {
  const { media, span } = useStyles();
  let history = useHistory();
  const handleClick = (name) => {
    localStorage.setItem('selectedCountry', name);
    history.push('/country-details', name);
  };

  return (
    <Grid container spacing={2}>
      {fetchedRegion.map(
        ({ name, flag, population, region, capital }, index) => (
          <Grid key={index} item xs={12} sm={4} md={3}>
            <Card onClick={() => handleClick(name)}>
              <CardActionArea>
                <CardMedia className={media} image={flag} title={name} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    <span className={span}>Population: </span>
                    {population}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    <span className={span}>Region: </span>
                    {region}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p">
                    <span className={span}>Capital: </span>
                    {capital}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default SearchCountry;
