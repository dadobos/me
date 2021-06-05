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
  IconButton
} from '@material-ui/core';
import DarkModeToogle from './darkModeToogle'
import { makeStyles } from '@material-ui/styles';
import HideOnScroll from '../../../../common/hideOnScroll'
import ThreeSixtyOutlinedIcon from '@material-ui/icons/ThreeSixtyOutlined';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    zIndex: 1301,
    background: 'transparent',
    [theme.breakpoints.down('lg')]: {
      backgroundColor: theme.palette.background.default,
    },
  },
  name: {
    textTransform: 'uppercase',
    letterSpacing: '.5rem',
  }
  

}));
const handleScrollDown = (event) => {
  event.preventDefault();
  const anchor = (event.target.ownerDocument || document).querySelector(
    '#footer'
  );

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
      <AppBar className={classes.appBar} elevation={0}>
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
                  onClick={handleScrollDown}
                >
                  About
                </MaterialLink>
              </Breadcrumbs>
            </Grid>
            <Grid item >
              <Grid container alignItems="center">
                <DarkModeToogle/>
                <Link to="/projects">
                  <IconButton disableRipple>
                    <ThreeSixtyOutlinedIcon  />
                  </IconButton>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};
export default Header;
