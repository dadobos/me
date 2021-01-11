import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Header from './components/header';
import Footer from './components/footer';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 'calc(100vh-128px)',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    // flex: 1,
    fallbacks: [
      { minHeight: '-moz-calc(100% - 128px)' },
      { minHeight: '-webkit-calc(100% - 128px)' },
      { minHeight: '-o-calc(100% - 128px)' },
    ],
  },
}));

const Main = (props) => {
  const { children } = props;
  const classes = useStyles();

  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <Container className={classes.container}>{children}</Container>
        <Footer />
      </div>
    </>
  );
};

export default Main;
