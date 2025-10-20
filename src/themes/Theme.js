import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import overrides from "./overrides";
import {
  AcidGreen,
  Chamoisee,
  Cultured,
  DavysGray,
  OuterSpaceCrayola,
  SeaGreenCrayola,
  VioletColorWheel,
  White,
} from "./Colors";

// Main layout
export const getMainTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        // palette values for light mode

        primary: {
          main: Chamoisee,
          contrastText: White,
        },
        secondary: {
          main: White,
          contrastText: White,
        },
        divider: Chamoisee,
        background: {
          default: Chamoisee,
          paper: Chamoisee,
        },
        text: {
          primary: White,
          secondary: White,
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: OuterSpaceCrayola,
          contrastText: AcidGreen,
        },
        secondary: {
          main: AcidGreen,
          contrastText: AcidGreen,
        },
        divider: AcidGreen,
        background: {
          default: OuterSpaceCrayola,
          paper: OuterSpaceCrayola,
        },
        text: {
          primary: Cultured,
          secondary: Cultured,
        },
      }),
    lightAccent: { main: VioletColorWheel },
    darkAccent: { main: SeaGreenCrayola },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  components: {
    ...overrides,
  },
});

// Landing page
export const getLandingWhite = (theme) =>
  responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: "Yeon Sung",
        transform: "matrix(1, 0, 0, 1, 0, 0)",
      },
      palette: {
        mode: theme.palette.mode,
        ...(theme.palette.mode === "light"
          ? {
            background: {
              default: DavysGray,
              paper: DavysGray,
            },
            text: {
              primary: White,
              secondary: White,
            },
          }
          : {}),
      },
      components: {
        ...overrides,
      },
    }),
  );
