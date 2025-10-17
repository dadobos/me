import { createTheme, responsiveFontSizes } from "@mui/material/styles";

import overrides from "./overrides";
import {
  AcidGreen,
  SeaGreenCrayola,
  UARed,
  VioletColorWheel,
  DavysGray,
  Chamoisee,
  White,
} from "./Colors";

// Main layout
export const MainTheme = (mode) => ({
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
            main: UARed,
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
            main: DavysGray,
            contrastText: AcidGreen,
          },
          secondary: {
            main: UARed,
            contrastText: AcidGreen,
          },
          divider: AcidGreen,
          background: {
            default: DavysGray,
            paper: DavysGray,
          },
          text: {
            primary: AcidGreen,
            secondary: AcidGreen,
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
export const LandingWhite = (theme) =>
  responsiveFontSizes(
    createTheme({
      typography: {
        fontFamily: "Yeon Sung",
        transform: "matrix(1, 0, 0, 1, 0, 0)",
      },
      palette: {
        mode: theme.palette.mode,
      },
      components: {
        ...overrides,
      },
    }),
  );
