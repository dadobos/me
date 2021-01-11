import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Hidden,
  Tabs,
  Tab,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,

  drawerIconContainer: {
    alignSelf: 'center',
    '&:hover': { backgroundColor: 'transparent' },
    [theme.breakpoints.down('md')]: { padding: 0 },
  },
  drawerIcon: {
    height: '40px',
    width: '40px',
    color: 'white',
  },
  drawer: { minWidth: '50vw' },
  tab: {
    alignItems: 'flex-start',
    fontSize: '2rem',
    textTransform: 'capitalize',

  },
  right: {},
}));

const Navigation = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleTabsChange = (e, newValue) => {
    setValue(newValue);
    setOpenDrawer(false);
  };

  const open = () => {
    setOpenDrawer(true);
  };
  const close = () => {
    setOpenDrawer(false);
  };
  const wrapper = createRef();

  return (
    <Container ref={wrapper}>
      <Hidden mdUp>
        <IconButton
          onClick={() => setOpenDrawer(!openDrawer)}
          disableRipple
          className={classes.drawerIconContainer}
        >
          {openDrawer ? (
            <MenuOpenIcon className={classes.drawerIcon} />
          ) : (
            <MenuIcon className={classes.drawerIcon} />
          )}
        </IconButton>
      </Hidden>

      {matches ? (
        <SwipeableDrawer
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          open={openDrawer}
          onOpen={open}
          onClose={close}
          classes={{ paper: classes.drawer }}
        >
          <div className={classes.toolbar} />
          <Tabs
            value={value}
            onChange={handleTabsChange}
            orientation="vertical"
            indicatorColor="primary"
          >
            <Tab
              label="Home"
              component={Link}
              to="/"
              classes={{ wrapper: classes.tab }}
            />
            <Tab
              label="Projects"
              component={Link}
              to="/projects"
              classes={{ wrapper: classes.tab }}
            />
            <Tab
              label="Games"
              component={Link}
              to="/games"
              classes={{ wrapper: classes.tab }}
            />
            <Tab
              label="Snippets"
              component={Link}
              to="/snippets"
              classes={{ wrapper: classes.tab }}
            />
            <Tab
              label="About"
              component={Link}
              to="/about"
              classes={{ wrapper: classes.tab }}
            />
          </Tabs>
        </SwipeableDrawer>
      ) : (
        <Hidden smDown>
          <Tabs value={value} onChange={handleTabsChange} centered>
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Projects" component={Link} to="/projects" />
            <Tab label="Games" component={Link} to="/games" />
            <Tab label="Snippets" component={Link} to="/snippets" />
            <Tab label="About" component={Link} to="/about" />
          </Tabs>
        </Hidden>
      )}
    </Container>
  );
};
export default Navigation;
