import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 45,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (theme) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Where in the world?
          </Typography>
          <Button color="inherit">Dark Mode</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
