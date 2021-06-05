import React, { useContext } from 'react';
import { Container } from '@material-ui/core';
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from '@material-ui/core/styles';
import {ThemeContext} from '../../App'

import Footer from './components/footer';
import Header from './components/header';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    paddingTop: '2rem',
    // paddingBottom: '2rem',
    fallbacks: [
      { minHeight: '-moz-calc(100% - 128px)' },
      { minHeight: '-webkit-calc(100% - 128px)' },
      { minHeight: '-o-calc(100% - 128px)' },
    ],
  },
}));


const White = (props) => {
  const { children } = props;
  const classes = useStyles();
  const { darkMode} = useContext(ThemeContext);

  let theme = createMuiTheme({
    typography: {
      fontFamily: 'Yeon Sung',
      transform: 'matrix(1, 0, 0, 1, 0, 0)',

    },
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
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
