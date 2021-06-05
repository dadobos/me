import React, { useState, useEffect, createRef, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Hidden,
  Tabs,
  Tab,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  List,
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
    color: theme.palette.secondary.main,
  },
  drawer: {
    minWidth: '60vw',
    backgroundColor: theme.palette.secondary.main,
  },
  listitems: {
    padding: '1.5rem 2rem ',
    color: theme.palette.primary.main,
    width: '100%',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  },
  listText: {
    alignItems: 'flex-start',
    fontSize: '1.5rem',
    textTransform: 'capitalize',
  },
  selected: {
    '&.Mui-selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  },
}));

const Navigation = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [value, setValue] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);

  const tabsActions = useRef(null);
  

  const handleTabsChange = (e, newValue) => {
    setValue(newValue);
  };

  const open = () => {
    setOpenDrawer(true);
  };
  const close = () => {
    setOpenDrawer(false);
  };
  const wrapper = createRef();

  const routes = useMemo(
    () => [
      {
        name: 'Home',
        link: '/',
        activeIndex: 0,
      },
      {
        name: 'Projects',
        link: '/projects',
        activeIndex: 1,
      },
      {
        name: 'Games',
        link: '/games',
        activeIndex: 2,
      },
      {
        name: 'Snippets',
        link: '/snippets',
        activeIndex: 3,
      },
      {
        name: 'About',
        link: '/about',
        activeIndex: 4,
      },
    ],
    []
  );

  useEffect(() => {
    routes.forEach((route) => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
          }
          break;
        default:
          return false;
      }
    });
  }, [value, routes]);
  
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

          <List disablePadding>
            {routes.map((route) => (
              <ListItem
                className={classes.listitems}
                key={`${route}${route.activeIndex}`}
                button
                component={Link}
                to={route.link}
                value={route.activeIndex}
                selected={value === route.activeIndex}
                classes={{ selected: classes.selected }}
                onClick={() => {
                  setValue(route.activeIndex);
                  setOpenDrawer(false);
                }}
              >
                <ListItemText disableTypography className={classes.listText}>
                  {route.name}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      ) : (
        <Hidden smDown>
          <Tabs
            action={tabsActions}
            value={value}
            onChange={handleTabsChange}
            centered
          >
            {routes.map((route) => (
              <Tab
                key={`${route.activeIndex}`}
                label={route.name}
                component={Link}
                to={route.link}
              />
            ))}
          </Tabs>
        </Hidden>
      )}
    </Container>
  );
};
export default Navigation;
