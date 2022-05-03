import { createTheme, responsiveFontSizes } from '@mui/material/styles';

import overrides from './overrides';

export const Black = '#000000';
export const BlueGreen = '#004d40';
export const BrandyPunch = '#ce8f28';
export const Cadet = '#5A7881';
export const Celeste = '#CDFFF9';
export const Charcoal = '#37474f';
export const ChartreuseTraditional = '#E4FF1A';
export const Cultured = '#eceff1';
export const DeepSpaceSparkle = '#335C67';
export const AntiqueFuchsia = '#875C74';
export const Eggplant = '#75485E';
export const FruitSalad = '#509f60';
export const GrannySmithApple = '#ADF6B1';
export const IlluminatingEmerald = '#3E9276';
export const PersianGreen = '#009688';
export const RussianGreen = '#7B8E64';
export const InternationalGoldenGateBridge = '#BB4430';
export const MangoTango = '#F5853F';
export const MiddleRedPurple = '#AF5D63';
export const OuterSpaceCrayola = '#22363C';
export const Platinum = '#E5E5E5';
export const Pomegranate = '#f44336';
export const Rosewood = '#5E0B15';
export const Ruby = '#D81E5B';
export const Spectra = '#315460';
export const TeaGreen = '#CAE7B9';
export const TucanRed = '#754043';
export const TumbleWeed = '#CEA07E';
export const TwilightLavander = '#754668';
export const UARed = '#E01A4F';
export const White = '#ffffff';

// Main layout
export const MainTheme = (mode) => ({
	palette: {
		mode,
		...(mode === 'light'
			? {
					// palette values for light mode
					primary: { main: DeepSpaceSparkle, contrastText: White },
					secondary: { main: Cadet, contrastText: White },
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
					primary: { main: GrannySmithApple },
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
		lightAccent: { main: MangoTango },
		darkAccent: { main: PersianGreen },
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
	overrides,
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
			overrides,
		})
	);
