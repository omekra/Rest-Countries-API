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
  media: {
    height: 140,
  },
  span: {
    fontWeight: 600,
    color: theme.palette.primary.contrastText,
  },
}));

const Countries = ({ data }) => {
  const { media, span } = useStyles();

  return (
    <Grid container spacing={2}>
      {data.map(({ flag, name, population, region, capital }, index) => (
        <Grid key={index} item xs={12} sm={4} md={3}>
          <Card>
            <CardActionArea>
              <CardMedia className={media} image={flag} title={name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span className={span}>Population: </span>
                  {population}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span className={span}>Region: </span>
                  {region}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span className={span}>Capital: </span>
                  {capital}
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
