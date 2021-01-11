import React from 'react';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import About from '../about';
import Games from '../games';
import Snippets from '../snippets';
import Projects from '../projects';

const Home = () => {
  return (
    <Grid container direction="row" alignItems="stretch">
      <Grid item container>
        <Projects />
      </Grid>
      <Grid item container>
        <Games />
      </Grid>
      <Grid item container>
        <Snippets />
      </Grid>
      <Grid item container>
        <About />
      </Grid>
    </Grid>
  );
};

export default Home;
