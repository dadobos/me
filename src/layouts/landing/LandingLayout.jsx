import React, { useContext } from "react";

import { ThemeProvider } from "@mui/material/styles";

import { AppContext } from "App";
import { getLandingWhite } from "themes/Theme";
import FullScreenContainer from "layouts/common/fullScreenContainer";

import BackToTop from "../common/backToTop";
import Header from "./components/header";

const LandingLayout = (props) => {
	const { children } = props;

	const colorMode = useContext(AppContext);

	return (
		<AppContext.Provider value={colorMode}>
			<ThemeProvider theme={getLandingWhite}>
				<div id="back-to-top-anchor" />
				<Header />
				<FullScreenContainer>
					{children}
					<BackToTop />
				</FullScreenContainer>
			</ThemeProvider>
		</AppContext.Provider>
	);
};

export default LandingLayout;
