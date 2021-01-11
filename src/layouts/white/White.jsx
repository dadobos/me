import React from 'react';
import { Container } from '@material-ui/core';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
  responsiveFontSizes,
} from '@material-ui/core/styles';

import Footer from './components/footer';
import Header from './components/header';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    fallbacks: [
      { minHeight: '-moz-calc(100% - 128px)' },
      { minHeight: '-webkit-calc(100% - 128px)' },
      { minHeight: '-o-calc(100% - 128px)' },
    ],
  },
}));

let theme = createMuiTheme({
  typography: {
    fontFamily: 'Yeon Sung',
    transform: 'matrix(1, 0, 0, 1, 0, 0)',
    // h1: {
    //   // marginLeft: '-.5rem',
    //   paddingLeft: 0,
    // },
  },
});
theme = responsiveFontSizes(theme);

const White = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div id="back-to-top-anchor" />
      <Header />
      <Container className={classes.container}>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
};

export default White;
