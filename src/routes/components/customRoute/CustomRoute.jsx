import React from 'react';
import { Route } from 'react-router-dom';

const CustomRoute = ({ layout: Layout, component: Component }) => {
  return (
    <Route
      render={(matchProps) => {
        return (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        );
      }}
    />
  );
};

export default CustomRoute;
