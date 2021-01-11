import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Grid, Zoom } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '5rem',
    height: '5rem',
  },
}));

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: document.querySelector('#footer') ? window : undefined,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation">
        {children}
      </div>
    </Zoom>
  );
}

const Footer = (props) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" id="footer">
      <ScrollTop {...props}>
        <KeyboardArrowUpIcon
          className={classes.icon}
          style={{
            width: '5rem',
            height: '5rem',
          }}
        />
      </ScrollTop>
      {/* <div style={{ height: '30rem' }} /> */}
    </Grid>
  );
};
export default Footer;
