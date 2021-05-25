import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Breadcrumbs,
  Link as MaterialLink,
  Grid,
} from '@material-ui/core';
import SwitchToogle from './switchToogle'
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    zIndex: 1301,
    backgroundColor: 'transparent',
  },
  name: {
    textTransform: 'uppercase',
    letterSpacing: '.5rem',
  },
  cached: {
    color: '#a5d6a7',
  },
}));
const handleClick = (event) => {
  event.preventDefault();
  const anchor = (event.target.ownerDocument || document).querySelector(
    '#footer'
  );

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const Header = (props) => {
  const classes = useStyles();
  const { darkMode, setDarkMode } = props;

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBar} position="fixed" elevation={0}>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Breadcrumbs aria-label="breadcrumb">
                <Typography
                  color="textPrimary"
                  variant="h5"
                  className={classes.name}
                >
                  Dan Dobos
                </Typography>

                <MaterialLink
                  color="textPrimary"
                  to="#about"
                  onClick={handleClick}
                >
                  About
                </MaterialLink>
              </Breadcrumbs>
            </Grid>
            <Grid item >
              <Grid container alignItems="center">
                <SwitchToogle
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              />
                <Link to="/projects">
                <CachedOutlinedIcon className={classes.cached} />
              </Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
export default Header;
