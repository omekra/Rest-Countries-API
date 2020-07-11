import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';

const Loading = () => {
  return (
    <Paper elevation={0} style={{ height: '100vh' }}>
      <Grid item xs={12} md={4}>
        <Skeleton width="100%" height={60} />
      </Grid>
      <br />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Skeleton variant="rect" width="100%" height={146} />
          <br />
          <Skeleton height={30} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Skeleton variant="rect" width="100%" height={146} />
          <br />
          <Skeleton height={30} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Skeleton variant="rect" width="100%" height={146} />
          <br />
          <Skeleton height={30} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <Skeleton variant="rect" width="100%" height={146} />
          <br />
          <Skeleton height={30} />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
          <Skeleton width="60%" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Loading;
