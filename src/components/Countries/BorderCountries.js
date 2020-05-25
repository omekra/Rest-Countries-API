import React from 'react';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  borderCountries: {
    fontWeight: 600,
    maxWidth: 630,
    color: theme.palette.primary.contrastText,
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
  const { borderButtons, borderCountries } = useStyles();
  console.log(borders);

  return (
    <Typography
      variant="body2"
      color="textSecondary"
      component="div"
      className={borderCountries}>
      Border Countries:
      {borders.map((border, i) => (
        <Button key={i} className={borderButtons}>
          {border}
        </Button>
      ))}
    </Typography>
  );
};

export default BorderCountries;
