import React from 'react';
import {Grid, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <Grid
      container
      style={{
        marginTop: 'auto',
        zIndex: 1300,
      }}
      justify="center"
    >
      <Grid item>
        <Typography inline="true" variant="body1">
          Dan Dobos &copy; 2021 Build with passion
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
