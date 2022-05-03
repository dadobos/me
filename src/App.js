import React, { useState, useMemo, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
	responsiveFontSizes,
	ThemeProvider,
	createTheme,
} from '@mui/material/styles';
import { MainTheme } from './themes/Theme';
import { CustomRoutes } from './routes/Routes';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
	const [mode, setMode] = useState('dark');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[]
	);

	const theme = useMemo(
		() => responsiveFontSizes(createTheme(MainTheme(mode))),
		[mode]
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<Router basename={process.env.PUBLIC_URL}>
					<CustomRoutes />
				</Router>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default App;
