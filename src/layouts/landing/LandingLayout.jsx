import React, { useContext } from 'react';

import { ThemeProvider } from '@mui/material/styles';

import { ColorModeContext } from 'App';
import { LandingWhite } from 'themes/Theme';
import FullScreenContainer from 'layouts/common/fullScreenContainer';

import Footer from './components/footer';
import Header from './components/header';

const LandingLayout = (props) => {
	const { children } = props;

	const colorMode = useContext(ColorModeContext);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={LandingWhite}>
				<div id='back-to-top-anchor' />
				<Header />
				<FullScreenContainer>{children}</FullScreenContainer>
				<Footer />
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export default LandingLayout;
