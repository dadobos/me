import React, { Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorBoundary from './components/errorBoundary';
import CustomRoute from './components/customRoute';
import Main from '../layouts/main';

// const Main = lazy(() => import('layouts/main'));

const Home = lazy(() => import('../pages/home'));
const About = lazy(() => import('../pages/about'));
const Projects = lazy(() => import('../pages/projects'));
const Games = lazy(() => import('../pages/games'));
const Snippets = lazy(() => import('../pages/snippets'));

const CustomRoutes = () => {
  
  return (
    <Suspense fallback={<CircularProgress color="secondary" />}>
      <ErrorBoundary>
        <Switch>
          <CustomRoute exact path="/" component={Home} layout={Main} />
          <CustomRoute exact path="/about" component={About} layout={Main} />
          <CustomRoute
            exact
            path="/projects"
            component={Projects}
            layout={Main}
          />
          <CustomRoute exact path="/games" component={Games} layout={Main} />
          <CustomRoute
            exact
            path="/snippets"
            component={Snippets}
            layout={Main}
          />
        </Switch>
      </ErrorBoundary>
    </Suspense>
  );
};

export default CustomRoutes;
