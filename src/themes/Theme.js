import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';

import overrides from './overrides';

export const BlueGreen = '#004d40';
export const Celadon = '#a5d6a7';
export const Charcoal = '#37474f';
export const Cultured = '#eceff1';

// const BannerBlue =
//   'linear-gradient(136.88deg, #2176A7 41.34%, #0AB5FE 102.25%)';

export default createMuiTheme({
  palette: {
    common: {},
    primary: { main: BlueGreen, contrastText: Celadon },
    secondary: { main: Celadon, contrastText: BlueGreen },
    contrastThreshold: 3,
  },
  typography: {
    fontFamily: 'Chilanka',
  },
  overrides,
});
