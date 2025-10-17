import React from "react";

import { Grid, Grow, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@mui/material/styles";

function ScrollTop(props) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor",
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Grow in={trigger}>
      <div onClick={handleClick} role="presentation">
        {children}
      </div>
    </Grow>
  );
}

const BackToTop = (props) => {
  const theme = useTheme();
  return (
    <Grid
      sx={{
        position: "fixed",
        bottom: theme.spacing(2),
        left: theme.spacing(1),
      }}
      id="footer"
    >
      <ScrollTop {...props}>
        <KeyboardArrowUpIcon
          sx={{
            width: "5rem",
            height: "5rem",
            [theme.breakpoints.down("md")]: { width: "3rem", height: "3rem" },
          }}
        />
      </ScrollTop>
    </Grid>
  );
};
export default BackToTop;
