import React from "react";
import { Grid, Typography } from "@mui/material";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Grid
      container
      sx={{
        marginTop: "auto",
        zIndex: 1300,
        minHeight: "24px",
      }}
      justifyContent="center"
    >
      <Grid item>
        <Typography
          inline="true"
          variant="body1"
          fontFamily="Nanum Gothic Coding"
        >
          Dan Dobos &copy; {getCurrentYear()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
