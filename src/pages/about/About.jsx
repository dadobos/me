import React from 'react';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'flex-end',
  //   height: 'auto',
  // },
  container: {
    marginTop: 'auto',
    // height:'100vh'
    display: 'flex',
    // position: 'absolute',
  },
  name: {
    textTransform: 'uppercase',
    letterSpacing: '2rem',
    [theme.breakpoints.down('md')]: {
      letterSpacing: '1rem',
      fontSize: '1.4rem',
      fontWeight: 'bold',
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container id="about">
      <Grid container direction="row" alignItems="stretch" justify="flex-end">
        <div
          style={{
            height: '70vh',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <Grid
            className={classes.container}
            container
            direction="column"
            alignItems="flex-end"
            justify="flex-end"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h4" align="right" inline="true">
                Software Developer
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h1"
                gutterBottom
                align="right"
                inline="true"
                className={classes.name}
              >
                Dan Dobos
              </Typography>
            </Grid>

            <Grid item>
              <Typography align="right" inline="true" variant="h6">
                Characterized by the desire of understanding and implementing
                technological innovations.
              </Typography>
            </Grid>

            {/* <Grid item>Contact</Grid> */}
            <Grid item>
              <Typography align="right" inline="true">
                Contact
              </Typography>
              <Link
                variant="h6"
                href="mailto:danandreidobos@gmail.com"
                target="_blank"
                color="inherit"
              >
                danandreidobos@gmail.com
              </Link>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Container>
  );
};

export default About;
