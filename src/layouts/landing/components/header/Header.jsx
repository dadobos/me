import React from "react";

import { Link } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Breadcrumbs,
  Link as MaterialLink,
  Grid,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ThreeSixtyOutlinedIcon from "@mui/icons-material/ThreeSixtyOutlined";

import DarkModeToggle from "layouts/common/darkModeToggle";
import HideOnScroll from "layouts/common/hideOnScroll";

const Header = () => {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background: "transparent",
            zIndex: 1301,
            [theme.breakpoints.down("lg")]: {
              backgroundColor: theme.palette.background.default,
            },
          }}
          elevation={0}
        >
          <Toolbar>
            <Grid
              container
              sx={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Grid item>
                <Breadcrumbs aria-label="breadcrumb">
                  <Typography
                    variant="h5"
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: ".2rem",
                    }}
                  >
                    Dan Dobos
                  </Typography>
                  {/*href="#about" is used to navigate within the page  */}
                  <MaterialLink
                    color="textPrimary"
                    href="#about"
                    sx={{ cursor: "pointer" }}
                  >
                    About
                  </MaterialLink>
                </Breadcrumbs>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Link to="/projects">
                    <IconButton
                      aria-label="Projects"
                      disableRipple
                      sx={{ mr: 1 }}
                    >
                      <ThreeSixtyOutlinedIcon />
                    </IconButton>
                  </Link>
                  <DarkModeToggle />
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default Header;
