import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import overrides from './overrides';
import {
	DeepSpaceSparkle,
	White,
	Cadet,
	Mango,
	Black,
	GrannySmithApple,
	UARed,
	OuterSpaceCrayola,
	ChartreuseTraditional,
	Charcoal,
	Cultured,
	SeaGreenCrayola,
	VioletColorWheel,
	AcidGreen,
} from './Colors';

// Main layout
export const MainTheme = (mode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: {
						main: Charcoal,
						contrastText: AcidGreen,
					},
					secondary: {
						main: UARed,
						contrastText: AcidGreen,
					},
					divider: White,
					background: {
						default: Charcoal,
						paper: Charcoal,
					},
					text: {
						primary: AcidGreen,
						secondary: AcidGreen,
					},		  }
			: {
					// palette values for dark mode
					primary: {
						main: GrannySmithApple,
						contrastText: AcidGreen,
					},
					secondary: {
						main: UARed,
						contrastText: AcidGreen,
					},
					divider: AcidGreen,
					background: {
						default: Charcoal,
						paper: Charcoal,
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
