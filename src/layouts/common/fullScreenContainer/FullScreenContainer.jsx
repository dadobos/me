import React from "react";
import { Container } from "@mui/material";

const FullScreenContainer = (props) => {
  const { children } = props;
  // const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "calc(100vh - 24px )",
        paddingTop: "6rem",
        paddingBottom: "2rem",
        flex: 1,
        fallbacks: [
          { minHeight: "-moz-calc(100% - 24px)" },
          { minHeight: "-webkit-calc(100% - 24px)" },
          { minHeight: "-o-calc(100% - 24px)" },
        ],
      }}
    >
      {children}
    </Container>
  );
};

export default FullScreenContainer;
