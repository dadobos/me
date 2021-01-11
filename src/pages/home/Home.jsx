import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import About from '../about';
import Games from '../games';
import Snippets from '../snippets';
import Projects from '../projects';

const Home = () => {
  return (
    <Grid container direction="row" alignItems="stretch" spacing={3}>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h3">Projects</Typography>
          <Divider variant="inset"/>
        </Grid>
        <Grid item>
          <Projects />
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h3">Games</Typography>
          <Divider variant="inset"/>
        </Grid>
        <Grid item>
          <Games />
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <Typography variant="h3">Snippets</Typography>
          <Divider variant="inset"/>
        </Grid>
        <Grid item>
          <Snippets />
        </Grid>
      </Grid>

      <Grid item container justify="flex-end">
        <Grid item>
        <About /></Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
