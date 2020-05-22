import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  countryDetailsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  countryDetailsInner: {
    display: 'flex',
  },
  media: {
    height: 300,
  },
  countryDetailsLeft: {
    marginLeft: 120,
  },
  innerLeft: {
    marginRight: 140,
  },
  para: {
    marginBottom: 8,
  },
  span: {
    fontWeight: 600,
    color: theme.palette.primary.contrastText,
  },
  innerRight: {},
}));

const CountryDetailsInfo = ({
  cioc,
  name,
  flag,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
}) => {
  const {
    countryDetailsContainer,
    media,
    countryDetailsLeft,
    countryDetailsInner,
    innerLeft,
    para,
    span,
    innerRight,
  } = useStyles();
  return (
    <div key={cioc} className={countryDetailsContainer}>
      <img src={flag} alt={`${name} flag`} className={media} />
      <div className={countryDetailsLeft}>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <div className={countryDetailsInner}>
          <div className={innerLeft}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={para}>
              <span className={span}>Native Name: </span>
              {nativeName}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={para}>
              <span className={span}>Population: </span>
              {population}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={para}>
              <span className={span}>Region: </span>
              {region}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={para}>
              <span className={span}>Sub Region: </span>
              {subregion}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={para}>
              <span className={span}>Capital: </span>
              {capital}
            </Typography>
          </div>
          <div className={innerRight}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={para}>
              <span className={span}>Top Level Domain: </span>
              {Object.values(topLevelDomain)
                .map((domain) => domain)
                .join(', ')}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={para}>
              <span className={span}>Currencies: </span>
              {Object.values(currencies)
                .map((currency) => currency.name)
                .join(', ')}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={para}>
              <span className={span}>Languages: </span>
              {Object.values(languages)
                .map((language) => language.name)
                .join(', ')}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsInfo;
