import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorBoundary from "./components/errorBoundary";

import MainLayout from "../layouts/main";
import LandingLayout from "../layouts/landing";

const Home = lazy(() => import("../pages/landing"));
const About = lazy(() => import("../pages/about"));
const Projects = lazy(() => import("../pages/projects"));
const Blog = lazy(() => import("../pages/blog"));
const BestPractices = lazy(() => import("../pages/best-practices"));

export const CustomRoutes = () => {
  return (
    <Suspense fallback={<CircularProgress color="secondary" />}>
      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={
              <LandingLayout>
                <Home />
              </LandingLayout>
            }
          />

          <Route
            path="about"
            element={
              <MainLayout>
                <About />
              </MainLayout>
            }
          />

          <Route
            path="projects"
            element={
              <MainLayout>
                <Projects />
              </MainLayout>
            }
          />

          <Route
            path="blog"
            element={
              <MainLayout>
                <Blog />
              </MainLayout>
            }
          />

          <Route
            path="best-practices"
            element={
              <MainLayout>
                <BestPractices />
              </MainLayout>
            }
          />
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
};

// export default CustomRoutes;
