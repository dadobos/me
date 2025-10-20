import React from "react";

import { AppBar, Toolbar, CssBaseline, Box } from "@mui/material";

import LanguageSwitcher from "layouts/common/languageSwitcher";
import DarkModeToggle from "layouts/common/darkModeToggle";
import HideOnScroll from "layouts/common/hideOnScroll";
import Navigation from "./navigation";

const Header = () => {
	return (
		<>
			<CssBaseline />
			<HideOnScroll>
				<AppBar sx={{ position: "fixed", zIndex: 1301 }} elevation={0}>
					<Toolbar>
						<Navigation />
						<Box sx={{ display: { sm: "inline-flex", xs: "none" } }}>
							<LanguageSwitcher />
							<DarkModeToggle />
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</>
	);
};
export default Header;
