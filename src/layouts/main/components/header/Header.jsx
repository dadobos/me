import React from 'react';

import { AppBar, Toolbar, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HideOnScroll from '../../../../common/hideOnScroll'
import Navigation from './navigation';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    zIndex: 1301,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar className={classes.appBar} elevation={0}>
          <Toolbar>
            <Navigation />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};
export default Header;
