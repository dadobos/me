import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import overrides from './overrides';
import {
	DeepSpaceSparkle,
	White,
	Cadet,
	Black,
	GrannySmithApple,
	UARed,
	OuterSpaceCrayola,
	SeaGreenCrayola,
	VioletColorWheel,
} from './Colors';

// Main layout
export const MainTheme = (mode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: {
						main: DeepSpaceSparkle,
						contrastText: White,
					},
					secondary: {
						main: Cadet,
						contrastText: White,
					},
					divider: DeepSpaceSparkle,
					background: {
						default: White,
						paper: DeepSpaceSparkle,
					},
					text: {
						primary: Black,
						secondary: White,
					},
			  }
			: {
					// palette values for dark mode
					primary: {
						main: GrannySmithApple,
						contrastText: White,
					},
					secondary: {
						main: UARed,
						contrastText: White,
					},
					divider: Cadet,
					background: {
						default: OuterSpaceCrayola,
						paper: OuterSpaceCrayola,
					},
					text: {
						primary: White,
						secondary: White,
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
				fontFamily: 'Yeon Sung',
				transform: 'matrix(1, 0, 0, 1, 0, 0)',
			},
			palette: {
				mode: theme.palette.mode,
			},
			components: {
				...overrides,
			},
		})
	);
