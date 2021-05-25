import React from 'react';
import { Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {Brightness3Icon, WbSunnyIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 80,
    height: 48,
    padding: 8,
  },
  switchBase: {
    padding: 11,
    color: '#ff6a00',
  },
  thumb: {
    width: 26,
    height: 26,
    backgroundColor: 'transparent',
  },
  track: {
    background: 'linear-gradient(to right, #ee0979, #ff6a00)',
    opacity: '1 !important',
    borderRadius: 20,
    position: 'relative',
    '&:before, &:after': {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      width: '50%',
      transform: 'translateY(-50%)',
      color: '#fff',
      textAlign: 'center',
    },
    '&:before': {
      left: 4,
      opacity: 0,
    },
    '&:after': {
      right: 4,
    },
  },
  checked: {
    '&$switchBase': {
      color: '#185a9d',
      transform: 'translateX(32px)',
      '&:hover': {
        backgroundColor: 'rgba(24,90,257,0.08)',
      },
    },
    '& $thumb': {
      backgroundColor: 'transparent',
    },
    '& + $track': {
      background: 'linear-gradient(to right, #43cea2, #185a9d)',
      '&:before': {
        opacity: 1,
      },
      '&:after': {
        opacity: 0,
      },
    },
  },
}));

const SwitchToogle = (props) => {
  const classes = useStyles();
  const { darkMode, setDarkMode } = props;

  return (
    <Switch
    disableRipple
      checked={darkMode}
      onChange={() => setDarkMode(!darkMode)}
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
    />
  );
};

export default SwitchToogle;
